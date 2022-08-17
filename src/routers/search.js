const {searchSong}=require('./controllers')
const searchRouter=require('express').Router();

searchRouter.get('/search-song/:song',searchSong)

module.exports=searchRouter