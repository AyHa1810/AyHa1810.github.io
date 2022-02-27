const path = require('path');
const fs = require('fs');

const getFileInfoFromFolder = (route) => {
  const files = fs.readdirSync(route, 'utf8');
  const response = [];
  for (let file of files) {
    const extension = path.extname(file);
    const fileSizeInBytes = fs.statSync(file).size;
    const modifiedTime = fs.statSync(file).mtime;
    response.push({ name: file, extension, fileSizeInBytes, modifiedTime });
  }
  return response;
}

const { name, extenstion, fileSizeInBytes, modifiedTime } = getFileInfoFromFolder(".");
const dircontent = [ name, extenstion, fileSizeInBytes, modifiedTime ]
