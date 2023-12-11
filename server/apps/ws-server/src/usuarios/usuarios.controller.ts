// import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioInput } from './dto/create-usuario.dto';
import { UpdateUsuarioInput } from './dto/update-usuario.dto';

import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpStatus, HttpException, ParseUUIDPipe, Req, Query } from '@nestjs/common';
import axios from 'axios';


// @Controller('usuarios')
// export class UsuariosController {
//   constructor(private readonly usuariosService: UsuariosService) {}

//   @Post()
//   create(@Body() CreateUsuarioInput: CreateUsuarioInput) {
//     return this.usuariosService.create(CreateUsuarioInput);
//   }

//   @Get()
//   findAll() {
//     return this.usuariosService.findAll();
//   }

  

//   @Get(':ID_USUARIOS')
//   async findOne(@Param('ID_USUARIOS') ID_USUARIOS: number) {
//       try {
//           const usuario = await this.usuariosService.findOne(ID_USUARIOS)
//           return usuario
//       } catch (error) {
//           throw new NotFoundException('Usuario no encontrado')
//       }
//   }


//   @Patch(':ID_USUARIOS')
//     async update(@Param('ID_USUARIOS') ID_USUARIOS: number, @Body() UpdateUsuarioInput: UpdateUsuarioInput) {
//         try {
//             const usuario = await this.usuariosService.update(ID_USUARIOS, UpdateUsuarioInput)
//             return { message: 'Usuario actualizado con éxito', usuario }
//         } catch (error) {
//             throw new NotFoundException('No se pudo actualizar el usuario');
//         }
//     }

//   @Delete(':ID_USUARIOS')
//     async remove(@Param('ID_USUARIOS') ID_USUARIOS: number) {
//         try {
//             await this.usuariosService.remove(ID_USUARIOS)
//             return { message: 'Usuario eliminado con éxito' }
//         } catch (error) {
//             throw new NotFoundException('No se pudo eliminar el usuario');
//         }
//     }

// }



@Controller('usuarios')
export class UsuariosController {

    async validateToken(token: string): Promise<any> {
        try {
          const response = await axios.post('http://localhost:3001/auth/login', { token });
          return response.data;
        } catch (error) {
          return null;
        }
      }
    
      async isAuthenticated(req: any): Promise<boolean> {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
          return false;
        }
        const user = await this.validateToken(token);
        return !!user;
      }

  constructor(private readonly usuariosService: UsuariosService) {}



  @Post()
  async create(@Body() createUsuariosDto: CreateUsuarioInput, @Req() req: any) {
    const isAuthenticated = await this.isAuthenticated(req);
    if (!isAuthenticated) {
      throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
    }
    return this.usuariosService.create(createUsuariosDto);
  }

  @Get()
  async findAll(@Req() req: any) {
    const isAuthenticated = await this.isAuthenticated(req);
    if (!isAuthenticated) {
      throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
    }
    return this.usuariosService.findAll();
  }

  

  @Get(':ID_USUARIOS')
  async findOne(@Param('ID_USUARIOS') ID_USUARIOS: number, @Req() req: any) {
    const isAuthenticated = await this.isAuthenticated(req);
    if (!isAuthenticated) {
      throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
    }
    try {
      const usuario = await this.usuariosService.findOne(ID_USUARIOS);
      if (!usuario) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return usuario;
    } catch (error) {
      throw new NotFoundException('Usuario no encontrado');
    }
  }


  @Patch(':ID_USUARIOS')
  async update(
    @Param('ID_USUARIOS') ID_USUARIOS: number,
    @Body() UpdateUsuariosInput: UpdateUsuarioInput,
    @Req() req: any
  ) {
    const isAuthenticated = await this.isAuthenticated(req);
    if (!isAuthenticated) {
      throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
    }
    try {
      const usuario = await this.usuariosService.update(ID_USUARIOS, UpdateUsuariosInput);
      if (!usuario) {
        throw new NotFoundException('No se pudo actualizar el usuario');
      }
      return { message: 'Usuario actualizado con éxito', usuario };
    } catch (error) {
      throw new NotFoundException('No se pudo actualizar el usuario');
    }
  }

  @Delete(':ID_USUARIOS')
  async remove(@Param('ID_USUARIOS') ID_USUARIOS: number, @Req() req: any) {
    const isAuthenticated = await this.isAuthenticated(req);
    if (!isAuthenticated) {
      throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
    }
    try {
      const deleted = await this.usuariosService.remove(ID_USUARIOS);
      if (!deleted) {
        throw new NotFoundException('No se pudo eliminar el usuario');
      }
      return { message: 'Usuario eliminado con éxito' };
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar el usuario');
    }
  }

}
