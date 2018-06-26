const fs = require('fs');
const process = require('process');
const folder = `${process.cwd()}/app/views/versions`;
fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    fs.stat(`${folder}/${file}`, (err2, stat) => {
      const isDirectory = stat.isDirectory;
      if (isDirectory) {
        fs.readdir(`${folder}/${file}`, (err, subFiles) => { // make this recursive
          fs.readFile(`${folder}/${file}/${subFiles}`, function (err, data) {
              if (err) throw err;
              console.log(data.toString());
          });
        });
      }
    });
  })
})

const prototypes = () => {
  return [
    {
      name: 'hi'
    },
    {
      name: 'bye'
    }
  ]
}
module.exports = prototypes;