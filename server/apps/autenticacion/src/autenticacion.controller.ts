import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './autenticacion.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials): Promise<any> {
    const user = await this.authService.validateUser(credentials);

    if (user) {
      const token = await this.authService.generateToken({ userId: user.id });
      return { token, statusCode: 200 }; // Devuelve el código de estado 200 junto con el token
    } else {
      return { message: 'Credenciales inválidas', statusCode: 201 }; // Devuelve el código de estado 201 para credenciales inválidas
    }
  }
}
