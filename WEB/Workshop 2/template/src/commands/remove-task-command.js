import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class RemoveTaskCommand extends Command {
  async execute(name) {
    await wait(500);

    try {
      await super.taskRegistry.removeTask(name)
      return 'Task removed successfully!'
    } catch (e) {
      return `Problem with removing the task: ${e.message}`
    }

  }
}
