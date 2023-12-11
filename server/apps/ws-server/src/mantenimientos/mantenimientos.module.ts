import { Module } from '@nestjs/common';
import { MantenimientosService } from './mantenimientos.service';
import { MantenimientosController } from './mantenimientos.controller';

import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Mantenimiento } from './entities/mantenimiento.entity';
import { MantenimientosResolver } from './mantenimientos.resolver';

@Module({
  providers: [MantenimientosService, MantenimientosResolver],
  controllers: [MantenimientosController],
  imports:[TypeOrmModule.forFeature([Mantenimiento])],
  exports:[MantenimientosService, TypeOrmModule]
  
})
export class MantenimientosModule {}
