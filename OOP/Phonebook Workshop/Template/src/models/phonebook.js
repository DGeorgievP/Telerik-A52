// eslint-disable-next-line no-unused-vars
import { Contact } from './contact';

export class Phonebook {
  static ZERO_CONTACTS_LIST = 0
  #contacts;

  constructor() {
    this.#contacts = [];
  }

  get contacts() {
    return this.#contacts;
  }

  set contacts(cont) {
    this.#contacts = cont;
  }

  addContact(contact) {

    if (contact === null || contact === undefined) {
      throw new Error('Invalid contact');
    } else if (this.#contacts.findIndex(user => user.name === contact.name) !== -1) {
      throw new Error('Contact already added');
    } else {
      this.#contacts.push(contact);
    }

  }

  removeContact(name) {
    if (!name) {
      throw new Error('Invalid Name');
    };

    const index = this.contacts.findIndex(contact => contact.name === name);
    if (index === -1) {
      throw new Error('Contact not found');
    }

    this.#contacts.splice(index, 1);
  }

  updateContact(name, phone) {

    const index = this.#contacts.findIndex(contact => contact.name === name);
    if (!name) {
      throw new Error('Invalid name');
    } else if (index === -1) {
      throw new Error('Contact not found');
    } else {
      this.#contacts[index].setPhone(phone);
    }

  }

  listAllContacts() {
    if (this.#contacts.length === Phonebook.ZERO_CONTACTS_LIST) {
      return 'No contacts.';
    } else {
      const list = this.#contacts.map(contact => `${contact.name}: [${contact.phone}]`).join('\n');
      return `All contacts: \n${list}`;
    }

  }

  search(partialName) {
    if (!partialName || typeof partialName !== 'string') {
      throw new Error('Invalid name');
    }

    const sameContacts = this.#contacts.filter(contact => contact.name.includes(partialName));
    return sameContacts;
  }
}
