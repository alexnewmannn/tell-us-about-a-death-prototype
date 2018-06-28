const fs = require('fs');
const process = require('process');
const folder = `${process.cwd()}/app/views/versions`;
const nunjucks = require('nunjucks');
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

const getDate = (file) => {
  const r = /^{# date(.*)#}$/gm;
  const match = r.exec(file);
  if (match) {
    return Date.parse(match[1].trim().split('-').reverse().join('-'));
  }

  return null;
}

const readFiles = (path) => {
  if (path.includes('index.html')) {
    const file = fs.readFileSync(path).toString();
    return file;
  }
  return false;
}

const fileContents = readDirectory(folder).map(file => {
  return readFiles(file);
}).filter(Boolean).sort((a, b) => getDate(b) - getDate(a)).map(file => nunjucks.renderString(file));

module.exports = fileContents;