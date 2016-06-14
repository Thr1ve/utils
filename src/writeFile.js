
import fs from 'fs';

export default function writeFile(loc, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(loc, data, err => {
      if (err) {
        reject(err);
      } else {
        console.log('file written');
      }
    });
  });
}
