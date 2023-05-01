const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;


const categories = require('./data/categories.json')
const news = require('./data/news.json')
app.use(cors())

app.get('/', (req, res)=>{
    res.send("Hello you get your data");
})


app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/news', (req, res)=>{
    res.send(news);
})

app.get('/news/:id', (req, res)=>{
    const id = req.params.id;
    const selected = news.find(n => n._id === id);
    res.send(selected);
    // console.log(selected);
})

app.get('/categories/:id', (req, res)=>{
    const id = req.params.id;
    // console.log(typeof Number(id))
    if(Number(id) === 0){
        res.send(news)
    }
    else{
        const selectedCategories = news.filter(n => n.category_id === id);
        res.send(selectedCategories);
    }
    
})


app.listen(port, ()=>{
    console.log(`Your server is running on port: ${port}`);
})