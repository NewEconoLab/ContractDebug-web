import { Task } from "../entity/TaskEntitys";

export class TaskStore
{
    tableName = "task-store-manager";
    getTaskList()
    {
        let listStr = sessionStorage.getItem(this.tableName);
        let list: Task[] = []
        if (listStr)
        {
            list = JSON.parse(listStr);
        }
        return list;
    }

    pushTask(task: Task)
    {
        let list = this.getTaskList();
        list.push(task);
        sessionStorage.setItem(this.tableName, JSON.stringify(list));
    }

    setTasklist(tasks: Task[])
    {
        sessionStorage.setItem(this.tableName, JSON.stringify(tasks));
    }
}