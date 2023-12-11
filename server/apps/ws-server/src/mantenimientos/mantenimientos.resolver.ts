import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MantenimientosService } from './mantenimientos.service';
import { CreateMantenimientoInput } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoInput } from './dto/update-mantenimiento.dto';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Mantenimiento } from './entities/mantenimiento.entity';



@Resolver()
export class MantenimientosResolver {
  constructor(private readonly mantenimientoService: MantenimientosService) {}

  @Mutation(() => Mantenimiento)
  async createMantenimiento(@Args('createMantenimientoInput') CreateMantenimientoInput: CreateMantenimientoInput) {
    return this.mantenimientoService.create(CreateMantenimientoInput);
  }


  @Query(() => [Mantenimiento])
  async mantenimientos() {
    return this.mantenimientoService.findAll();
  }

  @Query(() => Mantenimiento)
  async mantenimiento(@Args('MANTENIMIENTO_ID') MANTENIMIENTO_ID: number) {
    try {
      const mantenimiento = await this.mantenimientoService.findOne(MANTENIMIENTO_ID);
      if (!mantenimiento) {
        throw new NotFoundException('Mantenimiento no encontrado');
      }
      return mantenimiento;
    } catch (error) {
      throw new NotFoundException('Mantenimiento no encontrado');
    }
  }

  @Mutation(() => Mantenimiento)
  async updateMantenimiento(
    @Args('MANTENIMIENTO_ID') MANTENIMIENTO_ID: number,
    @Args('updateMantenimientoInput') updateMantenimientoInput: UpdateMantenimientoInput,
  ) {
    try {
      const mantenimiento = await this.mantenimientoService.update(MANTENIMIENTO_ID, updateMantenimientoInput);
      return mantenimiento;
    } catch (error) {
      throw new NotFoundException('No se pudo actualizar el mantenimiento');
    }
  }

  @Mutation(() => Mantenimiento)
  async removeMantenimiento(@Args('MANTENIMIENTO_ID') MANTENIMIENTO_ID: number) {
    try {
      await this.mantenimientoService.remove(MANTENIMIENTO_ID);
      return true;
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar el mantenimiento');
    }
  }


}
