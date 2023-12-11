import { BadRequestException, Injectable, Logger, InternalServerErrorException, NotFoundException  } from '@nestjs/common';
import { CreateMantenimientoInput } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoInput } from './dto/update-mantenimiento.dto';
import { Mantenimiento } from './entities/mantenimiento.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MantenimientosService {
  private readonly logger = new Logger('MantenimientoService');

  constructor(
    @InjectRepository(Mantenimiento)
    private readonly mantenimientoRepository: Repository<Mantenimiento>,
  ){}

  async create(createMantenimientoInput: CreateMantenimientoInput): Promise<any>  {
    try {
      const mantenimiento =  this.mantenimientoRepository.create(createMantenimientoInput);
      await this.mantenimientoRepository.save(mantenimiento);
      return mantenimiento;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    // return 'This action adds a new repostaje';
  }

  findAll() {
    return `Busca algo mas especifico flaco`;
  }

  async findOne(MANTENIMIENTO_ID: number): Promise<Mantenimiento> {
    console.log(MANTENIMIENTO_ID)
    
    const mantenimiento= await  this.mantenimientoRepository.findOneBy({ MANTENIMIENTO_ID });
    console.log(mantenimiento)

    if(!mantenimiento)
      throw new NotFoundException(`Mantenimiento ${MANTENIMIENTO_ID} no encontrado`);
    return mantenimiento;
  }

  // async update(MANTENIMIENTO_ID: number, updateMantenimientoInput: UpdateMantenimientoInput): Promise<Mantenimiento> {
  //   const mantenimiento = await this.mantenimientoRepository.preload({
  //     MANTENIMIENTO_ID: MANTENIMIENTO_ID,
  //     ...updateMantenimientoInput
  //   });
  //   if (!mantenimiento) throw new NotFoundException(`Mantenimiento con ID ${MANTENIMIENTO_ID} no encontrado`)

  //   try {
  //     await  this.mantenimientoRepository.save(mantenimiento)
  //     return mantenimiento;
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   // return `This action updates a #${id} repostaje`;
  // }
  async update(MANTENIMIENTO_ID: number, updateMantenimientoInput: UpdateMantenimientoInput): Promise<Mantenimiento> {
    console.log('ID del mantenimiento a actualizar en el servicio back:', MANTENIMIENTO_ID);

    try {
      const updateResult = await this.mantenimientoRepository.update(MANTENIMIENTO_ID, updateMantenimientoInput);
      if (updateResult.affected === 0) {
        throw new NotFoundException(`Mantenimiento con ID ${MANTENIMIENTO_ID} no encontrado`);
    }

    const mantenimiento = await this.mantenimientoRepository.findOne({ where: { MANTENIMIENTO_ID } });


  return mantenimiento;

    } catch (error) {
      console.error('Error al actualizar el mantenimiento en el servicio back:', error);
      throw new InternalServerErrorException('No se pudo actualizar el mantenimiento');
    }
  }



  async remove(MANTENIMIENTO_ID: number) {
    const mantenimiento = await this.findOne(MANTENIMIENTO_ID);
    await this.mantenimientoRepository.remove(mantenimiento);
    return `This action removes a #${MANTENIMIENTO_ID} repostaje`;
  }

}
