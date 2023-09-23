import { OlympiansFactory } from '../factories/olympians.factory.js';
import { OlympicsCommittee } from '../providers/olympics-committee.js';
import { Task } from './base.task.js';

export class CreateBoxerTask extends Task   {
  #factory = OlympiansFactory;
  #committee = OlympicsCommittee;

  get factory(){
      return this.#factory;
  }

  get committee() {
      return this.#committee;
  }

  run(firstName, lastName, country, category, wins, losses) {
      const boxer = this.factory.createBoxer(firstName, lastName, country, category, wins, losses);
      this.committee.olympians.push(boxer);

      return 'Boxer created';
  }
}