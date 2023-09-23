// eslint-disable-next-line no-unused-vars
import moment from 'moment';

export class Contact {
  static MIN_NAME_SYMBOLS = 3;
  static MAX_NAME_SYMBOLS = 25;
  static ZERO_HISTORY_LOG = 0

  #name;
  #phone;
  #history;

  constructor(name, phone) {

    if (!name || name.length < Contact.MIN_NAME_SYMBOLS || name.length > Contact.MAX_NAME_SYMBOLS) {
      throw new Error('Name not in length range');
    } else {
      this.#name = name;
    }

    if (phone.length === 12 &&
      phone[0] === 0 && phone[4] === '', phone[4] === '-' && phone[8] === '-', phone[8] === '-') {
      this.phone = phone;
    } else {
      throw new Error('Invalid phone');
    }

    this.#history = [];
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get phone() {
    return this.#phone;
  }

  set phone(newPhone) {
    this.#phone = newPhone;
  }

  get history() {
    return this.#history;
  }


  setPhone(phone) {
    if (phone.length === 12 &&
      phone[0] === 0 && phone[4] === '', phone[4] === '-' && phone[8] === '-', phone[8] === '-') {
      this.#phone = phone;
    } else {
      throw new Error('Invalid phone');
    }
  }

  call() {
    const date = new Date().toLocaleString();
    const time = Math.floor(Math.random() * 150) + 1;
    const callLog = `[${date}] Call: Duration: ${time} sec.`;
    this.#history.push(callLog);
  }

  message(msg) {
    if (!msg) {
      throw new Error('Invalid message');
    } else {
      const date = new Date().toLocaleString();
      const msgLog = `[${date}] Message: (${msg})`;
      this.#history.push(msgLog);
    }
  }

  viewHistoryLog() {
    if (this.#history.length === Contact.ZERO_HISTORY_LOG) {
      console.log('No entries');
      return;
    }

    let result = `${this.#name}'s call log:\n`;

    const historyArr = this.#history;

    for (let i = historyArr.length - 1; i >= 0; i--) {
      result += historyArr[i] + `\n`;
    }

    console.log(result.trim());

  }

}
