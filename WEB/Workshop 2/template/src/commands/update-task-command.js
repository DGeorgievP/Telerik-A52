import { Command } from "./command";

export class UpdateTaskCommand extends Command {
    constructor(taskRegistry) {
        super()
        this.taskRegistry = taskRegistry
    }

    async execute(name) {
        await wait(500);

        if(!name) {
            return `Task with name ${name} doesn't exist!`
        }

        

    }

 }
