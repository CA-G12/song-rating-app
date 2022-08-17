const express = require('express')
const path = require('path')
const fetch = require('node-fetch')
require('dotenv').config();

const app = express()

app.set('port', process.env.PORT || 3000);
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,'..','public')))


app.get('/search-song/:song',(req,res) => {
      console.log(req.params.song)
        const url = `https://genius.p.rapidapi.com/search?q=${req.params.song}`;

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'genius.p.rapidapi.com'
        }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json =>(json.response.hits))
        .then(result => res.send(result))
        .catch(err => console.error('error:' + err));

})



app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname,'..','public','404.html'))
})
app.use((err,req,res,next) => {
    res.status(500).sendFile(path.join(__dirname,'..','public','500.html'))
})

module.exports = app