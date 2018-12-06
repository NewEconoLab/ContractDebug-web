import { TaskService } from "./TaskService";
export namespace services
{
    export const taskManager = new TaskService();
    export const routerParam: { [ name: string ]: any } = {};
}