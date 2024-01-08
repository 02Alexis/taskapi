import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
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
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Post()
  Create(@Body() body: CreateTaskDTO) {
    return this.tasksService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateTaskDTO) {
    return this.tasksService.update(id, body);
  }
}
