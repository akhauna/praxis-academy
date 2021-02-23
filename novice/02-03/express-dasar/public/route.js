const Router = require('express').Router;
const path = require('path');

const r=Router();

r.get('/hom',(req,res)=>{
    res.send('ini hal depan')
});


r.get('/:name',(req,res)=>{
    const name=req.params.name;
    res.send('ini hal depan'+name)
});



r.get('/',(req,res)=>{
    res.sendFile(path.resolve('public/index.html'))
});

r.get('/about-us',(req,res)=>{
    res.send('ini about us')
});

module.exports =r;