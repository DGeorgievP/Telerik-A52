import { OlympiansFactory } from '../factories/olympians.factory.js';
import { OlympicsCommittee } from '../providers/olympics-committee.js';
import { Task } from './base.task.js';

export class CreateSprinterTask extends Task {
  #factory = OlympiansFactory;
  #committee = OlympicsCommittee;

  run(firstName, lastName, country, personalRecords) {
      const sprinter = this.#factory.createSprinter(firstName, lastName, country, personalRecords);
      this.#committee.olympians.push(sprinter);

      return 'Sprinter created';
  }
}
