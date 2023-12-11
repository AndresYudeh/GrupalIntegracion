import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';

import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Usuario } from './entities/usuario.entity';
import { UsuariosResolver } from './usuarios.resolver';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosResolver],
  imports:[TypeOrmModule.forFeature([Usuario])],
  exports:[UsuariosService, TypeOrmModule]
})
export class UsuariosModule {}