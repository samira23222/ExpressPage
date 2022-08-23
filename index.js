const express = require('express');
const path =require('path');
const app = new express();



app.use(express.static('public'));
app.listen(4000, () => {
    console.log("app is listening tp port 4000");
});

app.get('/', (req, res) => {
    res.render('index')
}); 

app.get('/elements', (req, res) => {
    res.render('elements')

}); 

app.get('/generic', (req, res) => {
    res.render('generic')
}); 




