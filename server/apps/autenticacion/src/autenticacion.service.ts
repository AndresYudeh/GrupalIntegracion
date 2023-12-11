
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

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



  // async validateUser(credentials: any): Promise<any> {
  //   // Lógica para validar credenciales (reemplaza este ejemplo con tu lógica real)
  //   const { username, password } = credentials;

  //   // Simulando una validación básica (reemplaza con tu lógica real)
  //   if (username === 'Andres' && password === 'admin123') {
  //     return { id: 1, username: 'usuario' }; // Usuario válido
  //   } else {
  //     return null; // Credenciales inválidas
  //   }
  // }

  async validateUser(credentials: any): Promise<any> {
    const users = [
      { id: 1, username: 'Andres', password: 'admin123' }
    ];
  
    const { username, password } = credentials;
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      return { id: user.id, username: user.username }; // Usuario válido
    } else {
      return null; // Credenciales inválidas
    }
  }

}