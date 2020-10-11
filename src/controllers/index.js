const express = require('express')
const router = express.Router()

router.get('/register', (req, res) => {
    res.send('Registrado')
})

module.exports = app => app.use(router)

    
