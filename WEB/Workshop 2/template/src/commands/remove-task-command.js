import { wait } from '../utils/utils.js';
import { Command } from './command.js';

export class RemoveTaskCommand extends Command {
  async execute(name) {
    await wait(500);

    try {
      this.taskRegistry.removeTask(name)
      console.log ('Task removed successfully!')
    } catch (e) {
      console.log(`Problem with removing the task: ${e.message}`)
    }

  }
}
