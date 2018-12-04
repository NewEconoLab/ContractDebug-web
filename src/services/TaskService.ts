import { store } from "store";

export class TaskService
{
    public async update()
    {
        let list = store.taskStore.getTaskList();
        for (const task of list)
        {

        }
    }
}