
  // edge-analytics.middleware.ts
  const randomNumber = Math.random();
  console.log(randomNumber);
  import { Injectable, MiddlewareConsumer, NestMiddleware, NestModule } from '@nestjs/common';
  import { Request, Response, NextFunction } from 'express';
  
  @Injectable()
export class EdgeAnalyticsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware ejecutándose para:', req.url);
    
    if (req.url.includes('/unidades')) {
        const startTime = Date.now();
        
        res.on('finish', () => {
          const endTime = Date.now();
          const loadTime = endTime - startTime;
      
          if (!req['analyticsData']) {
            req['analyticsData'] = {}; // Inicialización si no está definido
          }
      
          req['analyticsData'] = {
            ...req['analyticsData'],
            path: req.url,
            loadTime: loadTime,
          };
      
          console.log('Datos de análisis almacenados:', req['analyticsData']);
          
        });
      }
      

    next();
  }
  
    private sendAnalyticsData(data: any) {
      console.log('Datos de análisis:', data);
      // Puedes enviar los datos a un servicio externo aquí
    }
  }