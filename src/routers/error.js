const {serverError,clientError}=require('../controllers')
const errorRouter=require('express').Router();

errorRouter.use(clientError)

errorRouter.use(serverError)
module.exports=errorRouter