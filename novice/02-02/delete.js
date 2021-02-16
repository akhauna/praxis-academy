var fs = require('fs');

fs.unlink('buatfile.js', function (err) {
    if (err) throw err;
    console.log('File deleted!');
}); 