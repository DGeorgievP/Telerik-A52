import { Person } from './person.js';
export class Sprinter extends Person {
    #personalRecords

    constructor(firstName, lastName, country, personalRecords) {
        super(firstName, lastName, country);

        if(typeof firstName === 'string') {
            this.firstName = firstName
        }

        if(typeof lastName === 'string') {
            this.lastName = lastName
        }

        if(typeof country === 'string') {
            this.country = country
        }

        if (personalRecords instanceof Map) {
            this.#personalRecords = personalRecords;
        } 
    }

    get personalRecords() {
        return this.#personalRecords;
    }

    additionalInfo() {
        let addInfo = 'PERSONAL RECORDS\n';
    
        for (const [event, time] of this.#personalRecords) {
            addInfo += `${event}: ${time} seconds\n`;
        }
    
        return addInfo;
    }

    print() {
        return `SPRINTER ${this. firstName} ${this.lastName} from ${this.country}\nPERSONAL RECORDS: ${this.personalRecords}`;
    }
}