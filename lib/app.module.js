"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const task_service_1 = require("./todo/task.service");
const task_module_1 = require("./todo/task.module");
const task_controller_1 = require("./todo/task.controller");
const mongoose_1 = require("@nestjs/mongoose");
const task_schema_1 = require("./todo/schemas/task.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: task_schema_1.Task.name, schema: task_schema_1.TaskSchema }]),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/taskDB'),
            microservices_1.ClientsModule.register([
                {
                    name: 'TASK_PACKAGE',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        url: 'localhost:5000',
                        package: 'task',
                        protoPath: `${process.env.PWD}/src/protos/task.proto`,
                    },
                },
            ]),
            task_module_1.TaskModule,
        ],
        controllers: [task_controller_1.TaskController],
        providers: [task_service_1.TaskService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map