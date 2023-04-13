const express = require('express');
const phones = require('./phones.json')
const app = express()
const port = 5000

app.get('/', (req, res) => {

    res.send("my phone data")

})

app.get('/phones', (req, res) => {

    res.send(phones);

})

app.get('/phones/:id', (req, res) => {

    const id = parseInt(req.params.id)
    const phone = phones.find(ph => ph.id === id) || {}
    
    res.send(phone)

})

app.listen(port, () => {
    console.log(`my phone server running on port: ${port}`)
})