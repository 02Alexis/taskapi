import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // Configura los módulos que serán utilizados en la aplicación, variables de entorno
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI), // Configura la conexión a la base de datos MongoDB
    TaskModule,
  ],
})
export class AppModule {}
