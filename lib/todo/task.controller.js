"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_task_dto_1 = require("./dto/create.task.dto");
const task_service_1 = require("./task.service");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(data) {
        console.log(`data`, data, typeof data);
        await this.taskService.createTask(data);
        return data;
    }
    async listTask(data) {
        console.log(`data`, data, typeof data);
        await this.taskService.listTask(data);
        return data;
    }
    async deleteTask(id) {
        await this.taskService.deleteTask(id);
        console.log(id);
        return {
            id: 2,
            title: 'Test title',
            completed: true,
        };
    }
    async findByIdTask(id) {
        console.log(id);
        await this.taskService.findByIdTask(id);
        return {
            id: 2,
            title: 'Test title',
            completed: true,
        };
    }
    async updateTask(data) {
        console.log(`data`, data, typeof data);
        await this.taskService.updateTask(data);
        return { ...data };
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, microservices_1.GrpcMethod)('TaskService', 'CreateTask'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, microservices_1.GrpcMethod)('TaskService', 'FetchTask'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "listTask", null);
__decorate([
    (0, microservices_1.GrpcMethod)('TaskService', 'DeleteTask'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
__decorate([
    (0, microservices_1.GrpcMethod)('TaskService', 'FindByIdTask'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findByIdTask", null);
__decorate([
    (0, microservices_1.GrpcMethod)('TaskService', 'UpdateTask'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map