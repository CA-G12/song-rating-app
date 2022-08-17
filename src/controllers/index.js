const searchSong=require('./controllers/search-song')
const serverError=require('./controllers/500error')
const clientError=require('./controllers/404error')
 
module.exports={searchSong,serverError,clientError}