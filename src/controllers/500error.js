const path = require('path')

const serverError=(err,req,res,next) => {
    res.status(500).sendFile(path.join(__dirname,'..','..','public','500.html'))
}

module.exports=serverError;