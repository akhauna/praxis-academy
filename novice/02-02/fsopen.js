var fs = require('fs');

fs.open('buatfile2.js', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});