const express = require('express');

const router=require('./public/route');

const app = express();

app.use('/',router);
//app.use('/about-us', router)

app.use(express.static('public'))
/*
app.get('/',(req,res) => {
    res.send('testo testo');
    console.log(req.header);
});

app.get('/home',(req,res) => {
    res.send('your home');
    console.log(req.header);
});
*/

app.listen(8080);
console.log('berhasil')