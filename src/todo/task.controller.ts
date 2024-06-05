import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateTaskDto } from './dto/create.task.dto';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @GrpcMethod('TaskService', 'CreateTask')
  async createTask(data: CreateTaskDto): Promise<any> {
    console.log(`data`, data, typeof data);
    await this.taskService.createTask(data);
    return data;
  }

  @GrpcMethod('TaskService', 'FetchTask')
  async listTask(data: CreateTaskDto[]): Promise<any> {
    console.log(`data`, data, typeof data);
    await this.taskService.listTask(data);
    return data;
  }

  @GrpcMethod('TaskService', 'DeleteTask')
  async deleteTask(id: any): Promise<any> {
    await this.taskService.deleteTask(id);
    console.log(id);
    return {
      id: 2,
      title: 'Test title',
      completed: true,
    };
  }

  @GrpcMethod('TaskService', 'FindByIdTask')
  async findByIdTask(id: any): Promise<any> {
    console.log(id);
    await this.taskService.findByIdTask(id);
    return {
      id: 2,
      title: 'Test title',
      completed: true,
    };
  }

  @GrpcMethod('TaskService', 'UpdateTask')
  async updateTask(data: any): Promise<any> {
    console.log(`data`, data, typeof data);
    await this.taskService.updateTask(data);
    return { ...data };
  }
}
