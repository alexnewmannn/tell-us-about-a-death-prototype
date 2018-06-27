const fs = require('fs');
const process = require('process');
const folder = `${process.cwd()}/app/views/versions`;

const isDirectory = (path => fs.statSync(path).isDirectory());
const flattenArray = (files => [].concat.apply([], files));

const readDirectory = (path) => {
  if (isDirectory(path)) {
    const folders = fs.readdirSync(path);
    return flattenArray(folders.map(item => {
      return isDirectory(`${path}/${item}`) ? readDirectory(`${path}/${item}`) : `${path}/${item}`;
    })).filter(Boolean);
  }
  return [];
}

const readFiles = (path) => {
  if (path.includes('index.html')) {
    const file = fs.readFileSync(path);
    return file.toString();
  }
  return false;
}

const fileContents = readDirectory(folder).map(file => {
  return readFiles(file);
}).filter(Boolean);

module.exports = fileContents;