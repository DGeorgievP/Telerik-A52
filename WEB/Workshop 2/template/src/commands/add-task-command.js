import { Task } from '../models/task.js';
import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class AddTaskCommand extends Command {
    async add(name) {
        
        await wait(500);

    }
}
