//untuk membuat dan mengisi file

var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('buatfile.js', 'isi data', function (err) {
  if (err) throw err;
  console.log('Saved!');
});