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

      fs.readFile(filename, { encoding: 'utf-8' }, function (err, data) {

        if (err) {
          return reject(new Error(`Error reading file ${filename}`))
        } else {
          console.log(`Successfully read ${filename}`)
          resolve(data)
        }

      })
    })
  }



  write(filename = '', data = '') {
    filename = join(__dirname, '..', filename);

    return new Promise((resolve, reject) => {

      fs.writeFile(filename, data, { encoding: 'utf-8', flag: 'a' }, function (err) {

        if (err) {
          return reject(new Error(`Error writing file`))
        } else {
          console.log(`File successfully written`)
          resolve()
        }

      })
    })
  }
}
