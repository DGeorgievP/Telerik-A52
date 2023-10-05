import { FileHandler } from "../services/file-handler.js";

const reader = new FileHandler();

reader
  .read('test/test.txt')
  .then(data => console.log(data));

const writer = new FileHandler()

writer
    .write(`test/write.txt`,'hugeCock')