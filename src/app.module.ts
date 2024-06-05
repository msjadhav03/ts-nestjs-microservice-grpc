import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TaskService } from './todo/task.service';
import { TaskModule } from './todo/task.module';
import { TaskController } from './todo/task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './todo/schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    MongooseModule.forRoot('mongodb://localhost/taskDB'),
    ClientsModule.register([
      {
        name: 'TASK_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'task',
          protoPath: `${process.env.PWD}/src/protos/task.proto`,
        },
      },
    ]),
    TaskModule,
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
