/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import { rejects } from 'assert';
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

export class FileHandler {
  read(filename = '') {
    filename = join(__dirname, '..', filename);

    return new Promise((resolve, reject) => {
      
      fs.readFile('data/tasks.all.json', { encoding: 'utf-8' }, function (err, data) {

        if (err) {
          reject(new Error(`Error reading file`))
        } else {
          resolve(data)
        }

      })
    })
  }


  write(filename = '', data = '') {
    filename = join(__dirname, '..', filename);

    
  }
}
