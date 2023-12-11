import { BadRequestException, Injectable, Logger, InternalServerErrorException, NotFoundException  } from '@nestjs/common';
import { CreateReporteRelaInput } from './dto/createrela-reporte.input';
import { UpdateReporteRelaInput } from './dto/updaterela-reporte.input';

import { ReporteRela} from './entities/reporterela.entity';
import { Repository } from 'typeorm';



import { ReportesGateway } from './reportes.gateway';
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class ReportesRelaService {
  private readonly logger = new Logger('ReportesRelaService');

  constructor(
    @InjectRepository(ReporteRela) private readonly reporteRepository: Repository<ReporteRela>,
    private readonly reportesGateway: ReportesGateway,
  ) {}


  // async create(createReporteRelaInput: CreateReporteRelaInput): Promise<any> {
  //   try {
  //       const reporte =  this.reporteRepository.create(createReporteRelaInput);
  //       await this.reporteRepository.save(reporte);
  //       return reporte;
  //     } catch (error) {
  //       console.log(error)
  //       if (error.code === '23505') {
  //           throw new BadRequestException(error.detail);
  //         }
          
  //         this.logger.error(`Unexpected error occurred: ${error.message}`, error.stack);
  //         throw new InternalServerErrorException('An unexpected error occurred');
  //     }
  // }

  async create(createReporteRelaInput: CreateReporteRelaInput): Promise<any> {
    try {
        const nuevoReporte =  this.reporteRepository.create(createReporteRelaInput);
        await this.reporteRepository.save(nuevoReporte);
        this.reportesGateway.notificarNuevoReporte(nuevoReporte);
        return nuevoReporte;
      } catch (error) {
        console.log(error)
        if (error.code === '23505') {
            throw new BadRequestException(error.detail);
          }
          
          this.logger.error(`Unexpected error occurred: ${error.message}`, error.stack);
          throw new InternalServerErrorException('An unexpected error occurred');
      }
  }




  findAll() {
    return `Busca algo mas especifico flaco`;
  }

  async findOne(REPORTE_ID: number): Promise<ReporteRela> {
    const reporte = await this.reporteRepository.findOneBy({ REPORTE_ID });
    if (!reporte) {
      throw new NotFoundException(`Reporte ${REPORTE_ID} no encontrado`);
    }
    return reporte;
  }

  async update(REPORTE_ID: number, updateReporteInput: UpdateReporteRelaInput): Promise<ReporteRela> {
    const updatedReporte = await this.reporteRepository.preload({
        REPORTE_ID: REPORTE_ID,
        ...updateReporteInput },
    );
    if (!updatedReporte) throw new NotFoundException(`Reporte con ID ${REPORTE_ID} no encontrado`)

    try {
      await  this.reporteRepository.save(updatedReporte)
      return updatedReporte;
      
    } catch (error) {
      console.log(error)
    }
    // return `This action updates a #${id} repostaje`;
  }


  async remove(REPORTE_ID: number) {
    const reporte = await this.findOne(REPORTE_ID);
    await this.reporteRepository.remove(reporte);
    return `This action removes a #${REPORTE_ID} repostaje`;
  }


}

