import { Task } from '../models/task.js';
import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class ListTasksCommand extends Command {
    async execute() {

        await wait(500);
    }
}
