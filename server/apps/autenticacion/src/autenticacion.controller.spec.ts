import { Test, TestingModule } from '@nestjs/testing';
import { AuthController} from './autenticacion.controller';
import { AuthService } from './autenticacion.service';

describe('AutenticacionController', () => {
    let autenticacionController: AuthController;
  
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        controllers: [AuthController],
        providers: [AuthService],
      }).compile();
  
      autenticacionController = app.get<AuthController>(AuthController);
    });
  
    // describe('root', () => {
    //   it('should return "Hello World!"', () => {
    //     expect(autenticacionController.getHello()).toBe('Hello World!');
    //   });
    // });
  });




// describe('AutenticacionController', () => {
//   let autenticacionController: AutenticacionController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [AutenticacionController],
//       providers: [AutenticacionService],
//     }).compile();

//     autenticacionController = app.get<AutenticacionController>(AutenticacionController);
//   });

//   describe('root', () => {
//     it('should return "Hello World!"', () => {
//       expect(autenticacionController.getHello()).toBe('Hello World!');
//     });
//   });
// });


