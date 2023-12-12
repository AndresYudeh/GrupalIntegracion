// import { Module } from '@nestjs/common';
// import { AutenticacionController } from './autenticacion.controller';
// import { AutenticacionService } from './autenticacion.service';
// import { AuthModule } from './auth/auth.module';
// import { CommonModule } from './common/common.module';

// @Module({
//   imports: [AuthModule, CommonModule],
//   controllers: [AutenticacionController],
//   providers: [AutenticacionService],
// })
// export class AutenticacionModule {}

// auth-service/src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './autenticacion.service';
import { WebhookService } from './webhook.service';

import { AuthController } from './autenticacion.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: ' ',
      signOptions: { expiresIn: '1m' },
    }),
  ],
  providers: [AuthService, WebhookService],
  controllers: [AuthController],
})
export class AuthModule {}
