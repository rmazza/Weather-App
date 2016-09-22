const express = require('express');
const app = express();

app.use('/js',express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/public'));
app.use('/views',express.static(__dirname + '/views'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, (err) =>{
    if(err){
        console.log(err);
    }
});