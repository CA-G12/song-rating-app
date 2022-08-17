const express = require('express')
const path = require('path')

// const {searchSong,serverError,clientError}=require('./controllers')
const errorRouter=require('./routers/error')
const searchRouter=require('./routers/search')
const app = express()

app.set('port', process.env.PORT || 3000);

app.use(express.json())

app.use(express.urlencoded())

app.use(express.static(path.join(__dirname,'..','public')))


app.use(searchRouter)
app.use(errorRouter)

module.exports = app