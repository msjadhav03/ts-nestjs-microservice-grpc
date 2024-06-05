import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}
  async createTask(data: any): Promise<any> {
    const result = await this.taskModel.create(data);
    console.log(result);
    return result;
  }

  async listTask(data: any): Promise<any> {
    const result = await this.taskModel.find({});
    console.log(result);
    return data;
  }

  async deleteTask(data: any): Promise<any> {
    const result = await this.taskModel.deleteOne({ _id: data._id });
    console.log(result);
    return data;
  }

  async findByIdTask(data: any): Promise<any> {
    const result = await this.taskModel.findOne({ _id: data._id });
    console.log(result);
    return data;
  }

  async updateTask(data: any): Promise<any> {
    const result = await this.taskModel.findOneAndUpdate(
      { _id: data._id },
      { $set: data },
    );
    console.log(result);
    return { ...data };
  }
}
