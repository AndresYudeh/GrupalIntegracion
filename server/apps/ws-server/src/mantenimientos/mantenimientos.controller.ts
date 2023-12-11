import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { MantenimientosService } from './mantenimientos.service';
import { CreateMantenimientoInput } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoInput } from './dto/update-mantenimiento.dto';



@Controller('mantenimientos')
export class MantenimientosController {
  constructor(private readonly mantenimientoService: MantenimientosService) {}

  @Post()
  create(@Body() createMantenimientoDto: CreateMantenimientoInput) {
    return this.mantenimientoService.create(createMantenimientoDto);
  }

  @Get()
  findAll() {
    return this.mantenimientoService.findAll();
  }

  

  @Get(':MANTENIMIENTO_ID')
  async findOne(@Param('MANTENIMIENTO_ID') MANTENIMIENTO_ID: number) {
      try {
          const mantenimiento = await this.mantenimientoService.findOne(MANTENIMIENTO_ID)
          return mantenimiento
      } catch (error) {
          throw new NotFoundException('Mantenimiento no encontrado')
      }
  }


//   @Patch(':MANTENIMIENTO_ID')
//     async update(@Param('MANTENIMIENTO_ID') MANTENIMIENTO_ID: number, @Body() UpdateMantenimientoInput: UpdateMantenimientoInput) {
//         try {
//             const mantenimiento = await this.mantenimientoService.update(MANTENIMIENTO_ID, UpdateMantenimientoInput)
//             return { message: 'Mantenimiento actualizado con éxito', mantenimiento }
//         } catch (error) {
//             throw new NotFoundException('No se pudo actualizar el mantenimiento');
//         }
//     }

@Patch(':MANTENIMIENTO_ID')
async update(@Param('MANTENIMIENTO_ID') MANTENIMIENTO_ID: number, @Body() UpdateMantenimientoInput: UpdateMantenimientoInput) {
    try {
        const mantenimiento = await this.mantenimientoService.update(MANTENIMIENTO_ID, UpdateMantenimientoInput)
        console.log('Mantenimiento updated successfully:', mantenimiento);
        return { message: 'Mantenimiento actualizado con éxito', mantenimiento }
    } catch (error) {
        console.error('Error updating mantenimiento:', error);
        throw new NotFoundException('No se pudo actualizar el mantenimiento');
    }
}

  @Delete(':MANTENIMIENTO_ID')
    async remove(@Param('MANTENIMIENTO_ID') MANTENIMIENTO_ID: number) {
        try {
            await this.mantenimientoService.remove(MANTENIMIENTO_ID)
            return { message: 'Mantenimiento eliminado con éxito' }
        } catch (error) {
            throw new NotFoundException('No se pudo eliminar el mantenimiento');
        }
    }

}
