import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private tasksService: TaskService) {}

  @Get()
  findAll() {
    return this.tasksService.finAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.tasksService.findOne(id);
    if (!task) throw new NotFoundException('Tarea no encontrada');
    return task;
  }

  @Post()
  async Create(@Body() body: CreateTaskDTO) {
    try {
      return await this.tasksService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Tarea ya existe');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.tasksService.delete(id);
    if (!task) throw new NotFoundException('Tarea no encontrada');
    return task;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTaskDTO) {
    const task = await this.tasksService.update(id, body);
    if (!task) throw new NotFoundException('Tarea no encontrada');
    return task;
  }
}
