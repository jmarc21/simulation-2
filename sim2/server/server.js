require('dotenv').config()
const cors = require('cors')
    , bodyParser = require('body-parser')
    , express = require('express')
    , massive = require('massive');

const app = express();
app.use(bodyParser.json());
const controller = require('./controller/controller');






//70C  
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db)
    app.listen(process.end.PORT, () => {
        console.log(`Im listening on port: ${process.env.PORT}`)
    })
})