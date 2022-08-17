const {serverError,clientError}=require('../controllers')
const errorRouter=require('express').router();

errorRouter.use(clientError)

errorRouter.use(serverError)
module.exports=errorRouter