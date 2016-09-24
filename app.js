const express = require('express');
const app = express();

app.use('/js',express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/public'));
app.use('/views',express.static(__dirname + '/views')); 
app.use('/module',express.static(__dirname + '/modules'));
app.use('/controllers',express.static(__dirname + '/controllers'));
app.use('/directives',express.static(__dirname + '/directives'));
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/directives',express.static(__dirname + '/directives'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, (err) =>{
    if(err){
        console.log(err);
    }
});