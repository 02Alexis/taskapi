import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI), // Configura la conexión a la base de datos MongoDB
    TaskModule,
  ],
})
export class AppModule {}
