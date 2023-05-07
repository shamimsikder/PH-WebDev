const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const users = [

    {id: 1, name: 'Kuddus', email: 'kuddus@gmail.com'},
    {id: 2, name: 'Akkkas', email: 'akkkas@gmail.com'},
    {id: 3, name: 'Nantu', email: 'Nantu@gmail.com'}
    
]

app.get('/', (req, res) => {

    res.send("This is users server")

})

app.get('/users', (req, res) => {

    res.send(users)

})

app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`)
})