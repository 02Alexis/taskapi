import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // habilitamos cors para permitir solicitudes desde otros dominios
  app.setGlobalPrefix('api'); // Establece un prefijo global para las rutas de la API
  app.useGlobalPipes(new ValidationPipe()); // Utiliza un tubo de validación global para validar automáticamente las solicitudes
  await app.listen(3000);
}
bootstrap();
