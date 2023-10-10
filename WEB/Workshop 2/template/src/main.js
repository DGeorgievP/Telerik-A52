import { TaskEngine } from './engine/engine.js';
import { ConsoleIterator } from './services/console-iterator.js';
import { TaskRegistry } from './services/task-registry.js';
import { AddTaskCommand } from './commands/add-task-command.js';
import { RemoveTaskCommand } from './commands/remove-task-command.js';
import { UpdateTaskCommand } from './commands/update-task-command.js';
import { ListTasksCommand } from './commands/list-tasks-command.js';


const taskRegistry = new TaskRegistry();

const removeTaskCommand = new RemoveTaskCommand(taskRegistry);
const addTaskCommand = new AddTaskCommand(taskRegistry);
const updateTaskCommand = new UpdateTaskCommand(taskRegistry);
const listTaskCommand = new ListTasksCommand(taskRegistry)

const taskEngine = new TaskEngine();

taskEngine.addCommand('remove', removeTaskCommand);
taskEngine.addCommand('add', addTaskCommand);
taskEngine.addCommand('update', updateTaskCommand);
taskEngine.addCommand('list', listTaskCommand);

const consoleIterator = new ConsoleIterator();

(async () => {
  for await (const line of consoleIterator) {
    const split = line.split(' ');
    taskEngine.executeCommand(split[0], split[1], split[2]);
    console.log(line);
  }
})();
