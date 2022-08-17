const app = require('./app')
const port= app.get('port');

app.listen(port,() => {
    console.log(`start listening at http://localhost:${port}`)
})