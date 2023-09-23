export class Person {
    static #minNameLength = 2;
    static #maxNameLength = 20;

    #firstName
    #lastName
    #country

    constructor(firstName, lastName, country) {
        if (!firstName && firstName.length >= Person.#minNameLength || firstName.length <= Person.#maxNameLength) {
            this.#firstName = firstName;
        }

        if (!lastName && lastName.length >= Person.#minNameLength || lastName.length <= Person.#maxNameLength) {
            this.#lastName = lastName;
        }

        if (!country && country.length >= Person.#minNameLength || country.length <= Person.#maxNameLength) {
            this.#country = country;
        }
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get country() {
        return this.#country;
    }

    additionalInfo() {

    }

    print() {
        
    }


}
