const fetch = require('node-fetch')
require('dotenv').config();

const path=require('path')
const searchSong=(req,res) => {
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

}
module.exports= searchSong;