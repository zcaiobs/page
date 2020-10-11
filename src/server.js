const express = require('express') 
const paths = require('./controllers/paths')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.static(__dirname+'/pages'))

app.get('/', (req, res) => {
    res.sendFile('index')
})
paths(app)

app.listen(PORT, () => console.log('Server ON', PORT))