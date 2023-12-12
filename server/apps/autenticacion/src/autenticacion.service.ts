
// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';



// @Injectable()
// export class AuthService {
//   constructor(private readonly jwtService: JwtService) {}

//   async generateToken(payload: any): Promise<string> {
//     return this.jwtService.sign(payload);
//   }

//   async validateToken(token: string): Promise<any> {
//     try {
//       const decoded = await this.jwtService.verify(token, {
//         secret: process.env.JWT_SECRET,
//       });
//       return decoded;
//     } catch (e) {
//       return null;
//     }
//   }


//   // async validateUser(credentials: any): Promise<any> {
//   //   // Lógica para validar credenciales (reemplaza este ejemplo con tu lógica real)
//   //   const { username, password } = credentials;

//   //   // Simulando una validación básica (reemplaza con tu lógica real)
//   //   if (username === 'Andres' && password === 'admin123') {
//   //     return { id: 1, username: 'usuario' }; // Usuario válido
//   //   } else {
//   //     return null; // Credenciales inválidas
//   //   }
//   // }

//   async validateUser(credentials: any): Promise<any> {
//     const users = [
//       { id: 1, username: 'Andres', password: 'admin123' }
//     ];
  
//     const { username, password } = credentials;
  
//     const user = users.find(u => u.username === username && u.password === password);
  
//     if (user) {
//       return { id: user.id, username: user.username }; // Usuario válido
//     } else {
//       return null; // Credenciales inválidas
//     }
//   }

// }

// auth.service.ts
// autenticacion.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WebhookService } from './webhook.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly webhookService: WebhookService
  ) {}

  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async validateToken(token: string): Promise<any> {
    try {
      const decoded = await this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      return decoded;
    } catch (e) {
      return null;
    }
  }

  async notifyDiscordLoginAttempt(username: string, success: boolean): Promise<void> {
    const eventType = success ? 'login_exitoso' : 'login_fallido';
    const payload = {
      username,
      success,
    };

    await this.webhookService.sendDiscordWebhook(eventType, payload);
  }

  async validateUser(credentials: any): Promise<any> {
    const users = [
      { id: 1, username: 'Andres', password: 'admin123' }
    ];

    const { username, password } = credentials;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      // Usuario válido, notificar a Discord
      await this.notifyDiscordLoginAttempt(user.username, true);
      return { id: user.id, username: user.username };
    } else {
      // Credenciales inválidas, notificar a Discord
      await this.notifyDiscordLoginAttempt(username, false);
      return null;
    }
  }
}