// import { NestFactory } from '@nestjs/core';
// import { AutenticacionModule } from './autenticacion.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AutenticacionModule);
//   await app.listen(3001);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AuthModule } from './autenticacion.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend Vite
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si necesitas enviar credenciales (por ejemplo, cookies)
  });
  await app.listen(3001);
}
bootstrap();