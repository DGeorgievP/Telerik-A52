import { Command } from './command.js';

export class ListTasksCommand extends Command {
    constructor(taskRegistry) {
        super()
        this.taskRegistry = taskRegistry
    } 
    
    async execute() {

        await wait(500);
    }
}
