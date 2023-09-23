import { Task } from './task.model.js';

/**
 * Represents a task board that manages tasks.
 */
export class Board {
  #tasks
  /**
   * Create a new Board instance.
  */
 constructor() {
   /**
     * An array containing the tasks on the board.
     * @type {Task[]}
     * @private
     */
    this.#tasks = [];
  }

  /**
   * Retrieve the list of tasks on the board.
   * @type {Task[]}
   * @readonly
  */
 get tasks() {
    return this.#tasks;
  }

  /**
   * Get the number of tasks currently on the board.
   * @type {number}
   * @readonly
   */
  get taskCount() {
    return this.#tasks.length;
  }

  /**
   * Add a new task to the board.
   * @param {Task} task - The task to be added.
   * @throws {Error} If the task is invalid or already exists on the board.
   */
  add(task) {
    if (!this.#tasks.includes(task) && task instanceof Task) {
      this.#tasks.push(task);
    } else {
      throw new Error(`Invalid task ${task}`);
    }
  }

  /**
   * Remove a task from the board.
   * @param {Task} task - The task to be removed.
   * @throws {Error} If the task is invalid or not found on the board.
   */
  remove(task) {
    if (!(task instanceof Task)) {
      throw new Error('Invalid task');
    }
    const index = this.#tasks.indexOf(task);

    if (index === -1) {
      throw new Error('Task not found');
    }
    this.#tasks.splice(index, 1);
  }

  /**
   * Convert the board data into a formatted string representation.
   * @returns {string} A formatted string representing the board and its tasks.
   */
  toString() {
    const titles = '---Task Board---\n\nTasks:\n\n';

    if (this.#tasks.length) {
      return titles + this.#tasks.join('\n--------\n');
    }

    return `${titles}No tasks at the moment.`;
  }
}