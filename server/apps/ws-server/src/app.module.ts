import { ReportesGateway } from './reportes/reportes.gateway';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepostajeModule } from './repostaje/repostaje.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ReportesModule } from './reportes/reportes.module';
import { UnidadesModule } from './unidades/unidades.module';


import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';

import { Repostaje } from './repostaje/entities/repostaje.entity';
import { Reporte } from './reportes/entities/reporte.entity';
import { ReporteRela } from './reportes/entities/reporterela.entity';
import { Unidade } from './unidades/entities/unidade.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';
import { Mantenimiento } from './mantenimientos/entities/mantenimiento.entity';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://aw2:Admin2023@backyardigans.z0jx9hg.mongodb.net/?retryWrites=true&w=majority'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ]
    }),
    RepostajeModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "city2",
      "entities": [Repostaje, Reporte, Unidade, Usuario,ReporteRela, Mantenimiento],
      "synchronize": true,
      "logging": true
    }),
    ReportesModule,
    UnidadesModule,
    UsuariosModule,
    MantenimientosModule],
  controllers: [AppController],
  providers: [
    ReportesGateway, AppService],
})
export class AppModule { }
