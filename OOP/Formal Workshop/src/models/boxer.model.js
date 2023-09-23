import { boxingCategory } from '../common/boxing-category.enum.js';
import { Person } from './person.js';
export class Boxer extends Person {
    static #minWinsAndLoss = 0;
    static #maxWinsAndLoss = 100;

    #category
    #wins
    #losses

    constructor(firstName, lastName, country, category, wins, losses) {
        super(firstName, lastName, country);

        if (typeof firstName === 'string') {
            this.firstName = firstName
        }

        if (typeof lastName === 'string') {
            this.lastName = lastName
        }

        if (typeof country === 'string') {
            this.country = country
        }

        if (Object.values(boxingCategory).includes(category)) {
            this.#category = category;
        }

        if (typeof wins === 'number' && wins >= Boxer.#minWinsAndLoss && wins <= Boxer.#maxWinsAndLoss) {
            this.#wins = wins;
        } else {
            this.#wins = Boxer.#minWinsAndLoss;
        }

        if (typeof losses === 'number' && losses >= Boxer.#minWinsAndLoss && losses <= Boxer.#maxWinsAndLoss) {
            this.#losses = losses;
        } else {
            this.#losses = Boxer.#minWinsAndLoss;
        }
    }

    get category() {
        return this.#category;
    }

    get wins() {
        return this.#wins;
    }

    get losses() {
        return this.#losses;
    }

    additionalInfo() {

    }
    print() {
        return `BOXER: ${this.firstName} ${this.lastName} from ${this.country}\nCategory: ${this.category}\nWins: ${this.wins}\nLosses: ${this.losses}`;
    }
}

