import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException,Query, HttpCode } from '@nestjs/common';
import { RepostajeService } from './repostaje.service';
// import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { CreateRepostajeInput } from './dto/create-repostaje.dto';

// import { UpdateRepostajeDto } from './dto/update-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';
import { query } from 'express';



@Controller('repostaje')
export class RepostajeController {
  constructor(private readonly repostajeService: RepostajeService) {}

  @Post()
  create(@Body() createRepostajeDto: CreateRepostajeInput) {
    return this.repostajeService.create(createRepostajeDto);
  }

  @Get()
  findAll() {
    return this.repostajeService.findAll();
  }

  

  @Get(':REPOSTAJE_ID')
  async findOne(  @Param('REPOSTAJE_ID') REPOSTAJE_ID: number) {
      try {
          const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID)
          return repostaje
      } catch (error) {
          throw new NotFoundException('Repostaje no encontrado')
      }
  }


/*   @Patch(':REPOSTAJE_ID')
    async update(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number, @Body() UpdateRepostajeInput: UpdateRepostajeInput) {
        try {
            const repostaje = await this.repostajeService.update(REPOSTAJE_ID, UpdateRepostajeInput)
            return { message: 'Repostaje actualizado con éxito', repostaje }
        } catch (error) {
            console.log(REPOSTAJE_ID);
            throw new NotFoundException('No se pudo actualizar el repostaje');
        }
    } */

    @Patch(':REPOSTAJE_ID')
    async update(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number, @Body() UpdateRepostajeInput: UpdateRepostajeInput) {
        try {
            console.log('Receiving PATCH request for REPOSTAJE_ID:', REPOSTAJE_ID);
    
            const repostaje = await this.repostajeService.update(REPOSTAJE_ID, UpdateRepostajeInput);
    
            console.log('Repostaje updated successfully:', repostaje);
            return { message: 'Repostaje actualizado con éxito', repostaje };
        } catch (error) {
            console.error('Error updating repostaje:', error);
            throw new NotFoundException('No se pudo actualizar el repostaje');
        }
    }
    




  @Delete(':REPOSTAJE_ID')
    async remove(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number) {
        try {
            await this.repostajeService.remove(REPOSTAJE_ID)
            return { message: 'Repostaje eliminado con éxito' }
        } catch (error) {
            throw new NotFoundException('No se pudo eliminar el producto');
        }
    }

}

// import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpStatus, HttpException, ParseUUIDPipe, Req } from '@nestjs/common';
// import axios from 'axios';

// @Controller('repostaje')
// export class RepostajeController {


//   async validateToken(token: string): Promise<any> {
//     try {
//       const response = await axios.post('http://localhost:3001/auth/login', { token });
//       return response.data;
//     } catch (error) {
//       return null;
//     }
//   }

//   async isAuthenticated(req: any): Promise<boolean> {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) {
//       return false;
//     }
//     const user = await this.validateToken(token);
//     return !!user;
//   }

  
//   constructor(private readonly repostajeService: RepostajeService) {}

//   @Post()
//   async create(@Body() createRepostajeDto: CreateRepostajeInput, @Req() req: any) {
//     const isAuthenticated = await this.isAuthenticated(req);
//     if (!isAuthenticated) {
//       throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
//     }
//     return this.repostajeService.create(createRepostajeDto);
//   }

//   @Get()
//   async findAll(@Req() req: any) {
//     const isAuthenticated = await this.isAuthenticated(req);
//     if (!isAuthenticated) {
//       throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
//     }
//     return this.repostajeService.findAll();
//   }

//   @Get(':REPOSTAJE_ID')
//   async findOne(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number, @Req() req: any) {
//     const isAuthenticated = await this.isAuthenticated(req);
//     if (!isAuthenticated) {
//       throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
//     }
//     try {
//       const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID);
//       if (!repostaje) {
//         throw new NotFoundException('Repostaje no encontrado');
//       }
//       return repostaje;
//     } catch (error) {
//       throw new NotFoundException('Repostaje no encontrado');
//     }
//   }

//   @Patch(':REPOSTAJE_ID')
//   async update(
//     @Param('REPOSTAJE_ID') REPOSTAJE_ID: number,
//     @Body() UpdateRepostajeInput: UpdateRepostajeInput,
//     @Req() req: any
//   ) {
//     const isAuthenticated = await this.isAuthenticated(req);
//     if (!isAuthenticated) {
//       throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
//     }
//     try {
//       const repostaje = await this.repostajeService.update(REPOSTAJE_ID, UpdateRepostajeInput);
//       if (!repostaje) {
//         throw new NotFoundException('No se pudo actualizar el repostaje');
//       }
//       return { message: 'Repostaje actualizado con éxito', repostaje };
//     } catch (error) {
//       throw new NotFoundException('No se pudo actualizar el repostaje');
//     }
//   }

//   @Delete(':REPOSTAJE_ID')
//   async remove(@Param('REPOSTAJE_ID') REPOSTAJE_ID: number, @Req() req: any) {
//     const isAuthenticated = await this.isAuthenticated(req);
//     if (!isAuthenticated) {
//       throw new HttpException('No estás autenticado', HttpStatus.UNAUTHORIZED);
//     }
//     try {
//       const deleted = await this.repostajeService.remove(REPOSTAJE_ID);
//       if (!deleted) {
//         throw new NotFoundException('No se pudo eliminar el repostaje');
//       }
//       return { message: 'Repostaje eliminado con éxito' };
//     } catch (error) {
//       throw new NotFoundException('No se pudo eliminar el repostaje');
//     }
//   }
// }

