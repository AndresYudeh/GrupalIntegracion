import { Module } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { ReportesRelaService } from './reportesrela.service';
import { ReportesResolver } from './reportes.resolver';

import { MongooseModule } from '@nestjs/mongoose';
import { Reporte, ReporteSchema } from './entities/reporte.entity';
import { ReporteRela } from './entities/reporterela.entity';


import { ReportesGateway } from './reportes.gateway';
import { Model } from 'mongoose';
import { TypeOrmModule } from '@nestjs/typeorm/dist';



@Module({
  providers: [ReportesGateway, ReportesResolver, ReportesService, ReportesRelaService],
  imports:[
    MongooseModule.forFeature([{ name: Reporte.name, schema: ReporteSchema }]),
    TypeOrmModule.forFeature([ReporteRela])
  ],
  exports:[ReportesService, TypeOrmModule, ReportesRelaService]
})
export class ReportesModule {}


// @Module({
//   providers: [ReportesGateway, ReportesResolver, ReportesService],
//   imports:[TypeOrmModule.forFeature([Reporte])]
// })
// export class ReportesModuleRela {}
