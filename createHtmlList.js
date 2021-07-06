const fs = require('fs');
const publicFolder = './public/'

const jsonResult = { files: [] }; //  if you want to change structure then modify here.

const createHtml = (path = publicFolder + 'html', obj = jsonResult) => {
  try {
    const files = fs.readdirSync(path);
    files.forEach(file => {
      const newPath = path + '/' + file;
      if (fs.statSync(newPath).isDirectory()) {
        obj[file] = { files: [] }; //  if you want to change structure then modify here.
        createHtml(newPath, obj[file]);
      } else {
        obj.files.push(newPath.split(publicFolder)[1]); //  if you want to change structure then modify here.
      }
    });
  } catch (err) {
    console.error(err);
  }
};

createHtml();

const filename = 'htmlList.json';
fs.writeFile(publicFolder + filename, JSON.stringify(jsonResult), 'utf8', (err) => {
  console.log('create html list.');
});