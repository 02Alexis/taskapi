// Define clases DTO (Data Transfer Object) para la validación de datos en las solicitudes
import { IsBoolean, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateTaskDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
