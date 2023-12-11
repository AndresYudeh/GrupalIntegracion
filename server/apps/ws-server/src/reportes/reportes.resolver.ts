import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReportesService } from './reportes.service';
import { ReportesRelaService } from './reportesrela.service';
import { Reporte } from './entities/reporte.entity';
import { ReporteRela } from './entities/reporterela.entity';
import { CreateReporteInput } from './dto/create-reporte.input';
import { UpdateReporteInput } from './dto/update-reporte.input';

import { CreateReporteRelaInput } from './dto/createrela-reporte.input';
import { UpdateReporteRelaInput } from './dto/updaterela-reporte.input';

import { NotFoundException, InternalServerErrorException } from '@nestjs/common';


@Resolver(() => ReporteRela)
export class ReportesResolver {
  constructor(private readonly reporteRelaService: ReportesRelaService) {}

  @Mutation(() => ReporteRela)
   async createReporte(@Args('createReporteRelaInput') CreateReporteRelaInput: CreateReporteRelaInput) {
    return this.reporteRelaService.create(CreateReporteRelaInput);
  }

  @Query(() => [ReporteRela], { name: 'reportes' })
  findAll() {
    return this.reporteRelaService.findAll();
  }


  
  @Query(() => ReporteRela)
  async reportes(@Args('REPORTE_ID') REPORTE_ID: number ) {
    try {
      const reporte = await this.reporteRelaService.findOne(REPORTE_ID);
      if (!reporte) {
        throw new NotFoundException('Reporte no encontrado');
      }
      return reporte;
    } catch (error) {
      throw new NotFoundException('Reporte no encontrado');
    }
  }



  @Mutation(() => ReporteRela)
  async updateReporte(
    @Args('REPORTE_ID') REPOSTAJE_ID: number,
    @Args('updateReporteInput') updateReporteInput: UpdateReporteRelaInput,
  ) {
    try {
      const reporte = await this.reporteRelaService.update(REPOSTAJE_ID, updateReporteInput);
      return reporte;
    } catch (error) {
      throw new NotFoundException('No se pudo actualizar el reporte');
    }
  }



  @Mutation(() => ReporteRela)
  async removeReporte(@Args('REPORTE_ID') REPORTE_ID: number) {
    try {
      await this.reporteRelaService.remove(REPORTE_ID);
      return true;
    } catch (error) {
      throw new NotFoundException('No se pudo eliminar el reporte');
    }
  }


}







// @Resolver(() => Reporte)
// export class ReportesResolver {
//   constructor(private readonly reportesService: ReportesService) {}

//   @Mutation(() => Reporte)
//    async createReporte(@Args('createReporteInput') createReporteInput: CreateReporteInput) {
//     return this.reportesService.create(createReporteInput);
//   }

//   @Query(() => [Reporte], { name: 'reportes' })
//   findAll() {
//     return this.reportesService.findAll();
//   }


//   @Query(() => Reporte)
//   async reportes(@Args('REPORTE_ID') REPORTE_ID: string ) {
//     try {
//       const reporte = await this.reportesService.findOne(REPORTE_ID);
//       if (!reporte) {
//         throw new NotFoundException('Reporte no encontrado');
//       }
//       return reporte;
//     } catch (error) {
//       throw new NotFoundException('Reporte no encontrado');
//     }
//   }


//   @Mutation(() => Reporte)
//   async updateReporte(
//     @Args('REPORTE_ID') REPOSTAJE_ID: string,
//     @Args('updateReporteInput') updateReporteInput: UpdateReporteInput,
//   ) {
//     try {
//       const reporte = await this.reportesService.update(REPOSTAJE_ID, updateReporteInput);
//       return reporte;
//     } catch (error) {
//       throw new NotFoundException('No se pudo actualizar el reporte');
//     }
//   }


//   @Mutation(() => Reporte)
//   async removeReporte(@Args('REPORTE_ID') REPORTE_ID: string) {
//     try {
//       await this.reportesService.remove(REPORTE_ID);
//       return true;
//     } catch (error) {
//       throw new NotFoundException('No se pudo eliminar el reporte');
//     }
//   }

// }
