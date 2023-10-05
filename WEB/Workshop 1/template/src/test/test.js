import { FileHandler } from "../services/file-handler";

const reader = new FileHandler();

reader
  .read('test/test.txt')
  .then(data => console.log(data));