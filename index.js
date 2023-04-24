const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;


const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res)=>{
    res.send("Hello you get your data")
})


app.get('/categories', (req, res)=>{
    res.send(categories)
})


app.listen(port, ()=>{
    console.log(`Your server is running on port: ${port}`);
})