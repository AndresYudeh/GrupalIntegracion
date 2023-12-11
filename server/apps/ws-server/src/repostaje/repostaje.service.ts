import { BadRequestException, Injectable, Logger, InternalServerErrorException, NotFoundException  } from '@nestjs/common';
// import { CreateRepostajeDto } from './dto/create-repostaje.dto';
import { CreateRepostajeInput } from './dto/create-repostaje.dto';

// import { UpdateRepostajeDto } from './dto/update-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';

import { Repostaje } from './entities/repostaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class RepostajeService {
  private readonly logger = new Logger('RepostajeService');

  constructor(
    @InjectRepository(Repostaje)
    private readonly repostajeRepository: Repository<Repostaje>,
  ){}

  async create(createRepostajeInput: CreateRepostajeInput): Promise<any>  {
    try {
      const repostaje =  this.repostajeRepository.create(createRepostajeInput);
      await this.repostajeRepository.save(repostaje);
      return repostaje;
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

  async findOne(REPOSTAJE_ID: number): Promise<Repostaje> {
    const repostaje= await  this.repostajeRepository.findOneBy ({ REPOSTAJE_ID });
    if(!repostaje)
      throw new NotFoundException(`Repostaje ${REPOSTAJE_ID} no encontrado`);
    return repostaje;
  }


  
  async update(REPOSTAJE_ID: number, updateRepostajeInput: UpdateRepostajeInput): Promise<Repostaje> {
    console.log('ID del repostaje a actualizar en el servicio back:', REPOSTAJE_ID);

    try {
        // Utiliza update para aplicar los cambios en la base de datos
        const updateResult = await this.repostajeRepository.update(REPOSTAJE_ID, updateRepostajeInput);

        // Verifica si se realizó con éxito la actualización
        if (updateResult.affected === 0) {
            throw new NotFoundException(`Repostaje con ID ${REPOSTAJE_ID} no encontrado`);
        }

        
      // Recupera el repostaje actualizado
      const repostaje = await this.repostajeRepository.findOne({ where: { REPOSTAJE_ID } });



        return repostaje;
    } catch (error) {
        console.error('Error al actualizar el repostaje en el servicio back:', error);
        throw new InternalServerErrorException('No se pudo actualizar el repostaje');
    }
}




  async remove(REPOSTAJE_ID: number) {
    const repostaje = await this.findOne(REPOSTAJE_ID);
    await this.repostajeRepository.remove(repostaje);
    return `This action removes a #${REPOSTAJE_ID} repostaje`;
  }

}
