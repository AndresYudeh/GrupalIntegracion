import { BadRequestException, Injectable, Logger, InternalServerErrorException, NotFoundException  } from '@nestjs/common';
import { CreateRepostajeInput } from './dto/create-repostaje.dto';
import { UpdateRepostajeInput } from './dto/update-repostaje.dto';
import { Repostaje } from './entities/repostaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';


@Injectable()
export class RepostajeService {
  private readonly logger = new Logger('RepostajeService');

  constructor(
    @InjectRepository(Repostaje)
    private readonly repostajeRepository: Repository<Repostaje>,
  ){}

  // async create(createRepostajeInput: CreateRepostajeInput): Promise<any>  {
  //   try {
  //     const repostaje =  this.repostajeRepository.create(createRepostajeInput);
  //     await this.repostajeRepository.save(repostaje);
  //     return repostaje;
  //   } catch (error) {
  //     console.log(error)
  //     if (error.code==='23505')
  //       throw new BadRequestException(error.detail)
  //     this.logger.error(error);
  //     throw new InternalServerErrorException('Error no esperado')
  //   }
  //   // return 'This action adds a new repostaje';
  // }

  async create(createRepostajeInput: CreateRepostajeInput): Promise<any> {
    try {
      const repostaje = this.repostajeRepository.create(createRepostajeInput);
      await this.repostajeRepository.save(repostaje);
  
      // Envía el webhook a Discord después de guardar el repostaje (creación)
      await this.sendDiscordWebhook(repostaje,1);
  
      return repostaje;
    } catch (error) {
      console.log(error);
      if (error.code === '23505') {
        throw new BadRequestException(error.detail);
      }
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }



  async sendDiscordWebhook(repostaje: Repostaje, caso: number, repostajeAntiguo?: Repostaje) {
    const webhookUrl = 'https://discord.com/api/webhooks/1183932463865675846/whny6WLDgnFy36g0gC4yhavYhtVlaCfKzd6YzftkZ9WRJGi9783zAPEnkxfbZqqMwWP1';
  
    try {
      let mensaje;
  
      switch (caso) {
        case 1:
          mensaje = `\`\`\`Nuevo repostaje creado:\nID: ${repostaje.REPOSTAJE_ID}\nComentario: ${repostaje.REPOSTAJE_COMENTARIO}\nKilometraje Anterior: ${repostaje.REPOSTAJE_KMAC}\nPlaca de la Unidad: ${repostaje.UNIDADES_PLACA}\nID de la Ruta: ${repostaje.RUTAS_ID}\`\`\``;
          break;
        case 2:
          mensaje = `\`\`\`Repostaje visualizado recientemente:\nID: ${repostaje.REPOSTAJE_ID}\nComentario: ${repostaje.REPOSTAJE_COMENTARIO}\nKilometraje Anterior: ${repostaje.REPOSTAJE_KMAC}\nPlaca de la Unidad: ${repostaje.UNIDADES_PLACA}\nID de la Ruta: ${repostaje.RUTAS_ID}\`\`\``;
          break;
        case 3:
          mensaje = `\`\`\`Repostaje eliminado:\nID: ${repostajeAntiguo.REPOSTAJE_ID}\nComentario: ${repostaje.REPOSTAJE_COMENTARIO}\nKilometraje Anterior: ${repostaje.REPOSTAJE_KMAC}\nPlaca de la Unidad: ${repostaje.UNIDADES_PLACA}\nID de la Ruta: ${repostaje.RUTAS_ID}\`\`\``;
          break;
        default:
          mensaje = `Repostaje actualizado recientemente:\nID: ${repostaje.REPOSTAJE_ID}\n`;
  
          if (repostajeAntiguo) {
            for (const key in repostajeAntiguo) {
              if (repostajeAntiguo.hasOwnProperty(key) && key !== 'REPOSTAJE_ID') {
                const valorAntiguo = repostajeAntiguo[key];
                const valorNuevo = repostaje[key];
  
                if (valorAntiguo !== valorNuevo) {
                  mensaje += `${key}: ${valorAntiguo} -> ${valorNuevo}\n`;
                }
              }
            }
          }
      }
  
      const payload = {
        content: mensaje,
      };
  
      await axios.post(webhookUrl, payload);
      console.log('Webhook a Discord enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el webhook a Discord:', error.message);
    }
  }
  

  findAll() {
    return `Busca algo mas especifico flaco`;
  }

  // async findOne(REPOSTAJE_ID: number): Promise<Repostaje> {
  //   const repostaje= await  this.repostajeRepository.findOneBy ({ REPOSTAJE_ID });
  //   if(!repostaje)
  //     throw new NotFoundException(`Repostaje ${REPOSTAJE_ID} no encontrado`);
  //   return repostaje;
  // }

  async findOne(REPOSTAJE_ID: number): Promise<Repostaje> {
    const repostaje = await this.repostajeRepository.findOneBy({ REPOSTAJE_ID });
    if (!repostaje) {
      throw new NotFoundException(`Repostaje ${REPOSTAJE_ID} no encontrado`);
    }
  
    // Envía el webhook a Discord después de visualizar el repostaje
    await this.sendDiscordWebhook(repostaje, 2);
  
    return repostaje;
  }


  
//   async update(REPOSTAJE_ID: number, updateRepostajeInput: UpdateRepostajeInput): Promise<Repostaje> {
//     console.log('ID del repostaje a actualizar en el servicio back:', REPOSTAJE_ID);

//     try {
//         // Utiliza update para aplicar los cambios en la base de datos
//         const updateResult = await this.repostajeRepository.update(REPOSTAJE_ID, updateRepostajeInput);

//         // Verifica si se realizó con éxito la actualización
//         if (updateResult.affected === 0) {
//             throw new NotFoundException(`Repostaje con ID ${REPOSTAJE_ID} no encontrado`);
//         }

        
//       // Recupera el repostaje actualizado
//       const repostaje = await this.repostajeRepository.findOne({ where: { REPOSTAJE_ID } });



//         return repostaje;
//     } catch (error) {
//         console.error('Error al actualizar el repostaje en el servicio back:', error);
//         throw new InternalServerErrorException('No se pudo actualizar el repostaje');
//     }
// }

async update(REPOSTAJE_ID: number, updateRepostajeInput: UpdateRepostajeInput): Promise<Repostaje> {
  console.log('ID del repostaje a actualizar en el servicio back:', REPOSTAJE_ID);

  try {
      // Obtén el repostaje antiguo antes de la actualización
      const repostajeAntiguo = await this.repostajeRepository.findOne({ where: { REPOSTAJE_ID } });
      // Utiliza update para aplicar los cambios en la base de datos
      const updateResult = await this.repostajeRepository.update(REPOSTAJE_ID, updateRepostajeInput);
      // Verifica si se realizó con éxito la actualización
      if (updateResult.affected === 0) {
          throw new NotFoundException(`Repostaje con ID ${REPOSTAJE_ID} no encontrado`);
      }    
    // Recupera el repostaje actualizado
    const repostaje = await this.repostajeRepository.findOne({ where: { REPOSTAJE_ID } });
    // Envía el webhook a Discord después de actualizar el repostaje
      await this.sendDiscordWebhook(repostaje, 0, repostajeAntiguo);
      return repostaje;
  } catch (error) {
      console.error('Error al actualizar el repostaje en el servicio back:', error);
      throw new InternalServerErrorException('No se pudo actualizar el repostaje');
  }
}



  // async remove(REPOSTAJE_ID: number) {
  //   const repostaje = await this.findOne(REPOSTAJE_ID);
  //   await this.repostajeRepository.remove(repostaje);
  //   return `This action removes a #${REPOSTAJE_ID} repostaje`;
  // }

  async remove(REPOSTAJE_ID: number) {
    const repostaje = await this.repostajeRepository.findOneBy({ REPOSTAJE_ID });
  
    // Almacena la información antes de eliminar el repostaje
    const repostajeAntiguo = { ...repostaje };
  
    await this.repostajeRepository.remove(repostaje);
  
    // Envía el webhook a Discord después de eliminar el repostaje
    await this.sendDiscordWebhook( repostaje, 3, repostajeAntiguo);
  
    return `This action removes a #${REPOSTAJE_ID} repostaje`;
  }  





}

