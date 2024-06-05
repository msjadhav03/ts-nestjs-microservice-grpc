import { CreateTaskDto } from './dto/create.task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(data: CreateTaskDto): Promise<any>;
    listTask(data: CreateTaskDto[]): Promise<any>;
    deleteTask(id: any): Promise<any>;
    findByIdTask(id: any): Promise<any>;
    updateTask(data: any): Promise<any>;
}
