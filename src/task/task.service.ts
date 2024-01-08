// el service interatua con la BD, interactuando con el schemas
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';
import { Task } from 'src/schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

  finAll() {
    return this.TaskModel.find();
  }

  // Crear tareas
  async create(createTask: CreateTaskDTO) {
    const newTask = new this.TaskModel(createTask); // Creamos
    return newTask.save(); //Guardamos
  }

  // Buscar una tarea
  async findOne(id: string) {
    return this.TaskModel.findById(id);
  }

  // Eliminar una tarea
  async delete(id: string) {
    return this.TaskModel.findByIdAndDelete(id);
  }

  // Actualizar una tarea
  async update(id: string, task: UpdateTaskDTO) {
    return this.TaskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
