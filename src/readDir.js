
import fs from 'fs';

export default function readDir(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}
