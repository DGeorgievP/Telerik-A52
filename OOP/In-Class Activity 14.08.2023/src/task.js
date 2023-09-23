import { status } from './status.js';

/** The Task class holds all relevant data and behavior a task might have. */
export class Task {
  // One way to indicate that a field should not be touched is to put an underscore before its name.
  // This won't prevent your colleges from directly interacting with it.

  _name;
  _dueDate;
  _status;

  constructor(name, dueDate) {

    if ((name !== null && name !== undefined && name !== '') && name.length > 6 && name.length < 20) {
      this._name = name;
    } 
    

    if(new Date(dueDate) !== 'Invalid Date'){
      this._dueDate = dueDate;
    }

    this._status = status.TODO;
  }

  changeName(value) {
    this._name = value;
  }

  changeDueDate(value) {
    this._dueDate = value;
  }

  reset() {
    this._status = status.TODO;
  }

  advance() {
    this._status = status.IN_PROGRESS;
  }

  complete() {
    this._status = status.DONE;
  }

  toString() {
    return `Name: ${this._name} \nStatus: ${this._status} \nDue: ${this._dueDate}`;
  }
}