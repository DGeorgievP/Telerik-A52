import { OlympiansFactory } from '../factories/olympians.factory.js';
import { OlympicsCommittee } from '../providers/olympics-committee.js';
import { Task } from './base.task.js';

export class ListOlympiansTask extends Task {
  #defaultKey = 'firstName';
  #defaultOrder = 'asc';
  #orderDirection = {
      asc: 1,
      desc: -1,
  };

  factory = OlympiansFactory;
  committee = OlympicsCommittee;

  run(key = this.#defaultKey, order = this.#defaultOrder) {
      if (this.committee.olympians.length === 0) {
          return 'No olympians added!';
      } 

      const sortedOlympians = this.committee.olympians.sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];
  
        if (aValue < bValue) return -1 * this.#orderDirection[order];
        if (aValue > bValue) return 1 * this.#orderDirection[order];
        return 0;
      });
  
       
      return sortedOlympians.map(olympian => olympian.info).join('\n');
  }
}
