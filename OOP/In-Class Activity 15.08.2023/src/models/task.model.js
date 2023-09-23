import { status } from '../common/status.enum.js';

/** The Task class holds all relevant data and behavior a task might have. */
export class Task {
  // One way to indicate that a field should not be touched is to put an underscore before its name.
  // This won't prevent your colleges from directly interacting with it.

  #name;
  #dueDate;
  #status;

  /**
   * Create a new Task instance.
   * @param {*} name Name of the task.
   * @param {*} dueDate The due date.
   * @throws {Error} If the name is invalid or the due date has passed.
   */
  constructor(name, dueDate) {
    if (!name) {
      throw new Error('name not valid');
    } else if (name.length < 6 || name.length > 20) {
      throw new Error('Name length not in constraints!');
    }

    if (dueDate.valueOf() < Date.now().valueOf()) {
      throw new Error('Can\'t set due date to a date in the past!');
    }

    this.#name = name;
    this.#dueDate = dueDate;
    this.#status = status.TODO;
  }


  get name() {
    return this.#name;
  }

  /**
   * Set the name of the task.
   * @param {string} value - The new name for the task.
   * @throws {Error} If the new name is invalid.
   */
  set name(value) {
    if (!value) {
      throw new Error('name not valid');
    } else if (value.length < 6 || value.length > 20) {
      throw new Error('Name length not in constraints!');
    } else {
      this.#name = value;
    }
  }

  get dueDate() {
    return this.#dueDate;
  }
  
  /**
  * Set the due date of the task.
  * @param {Date} value - The new due date for the task.
  * @throws {Error} If the new due date is in the past.
  */
  set dueDate(value) {
    if (value.valueOf() < Date.now().valueOf()) {
      throw new Error('Can\'t set due date to a date in the past!');
    }
    this.#dueDate = value;
  }

  /** Sets the task status to TODO. */

  get status() {
    return this.#status;
  }

  reset() {
    this.#status = status.TODO;
  }

  /** Sets the task status to IN_PROGRESS. */
  advance() {
    this.#status = status.IN_PROGRESS;
  }

  /** Sets the task status to DONE. */
  complete() {
    this.#status = status.DONE;
  }

  /** Transforms the task data into a formatted string */
  toString() {
    return `Name: ${this.#name}\n` +
      `Status: ${this.#status}\n` +
      `Due: ${this.#dueDate.toLocaleDateString()} ${this.#dueDate.toLocaleTimeString()}`;
  }
}
