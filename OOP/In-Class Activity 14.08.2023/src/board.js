/** The Board class holds tasks */
export class Board {
  _tasks = [];
  /**
   * Adds a task to the task array if the task doesn't already exists
   * @param {*} task The task that should be added
   */
  add(task) {
    if (!this._tasks.filter((current) => current._name === task._name)) {
      throw new Error('Task already exists');
    } else {
      this._tasks.push(task);
    }
  }

  /**
   *
   * @param {*} task The task that should be removed
   */
  remove(task) {
    if (this._tasks.filter((current) => current._name === task._name)) {
      this._tasks.splice(this._tasks.indexOf(task), 1);
    } else {
      throw new Error('Task does not exist');
    }
  }

  /**
   *
   * @returns Formatted string from the task array
   */
  toString() {
    const message = '---Task Board--- \n\n Tasks: \n';

    let tasklist = this._tasks.reduce((acc, el) => {
      return acc + el.toString() + '\n' + '--------' + '\n';
    }, '');
    if (this._tasks[0] === undefined) {
      return 'No tasks at the moment.';
    } else {
      return `${message} ${tasklist}`;
    }
  }
}
