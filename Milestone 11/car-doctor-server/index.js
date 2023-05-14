const express =  require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {

    res.send('Car Doctor is Running')

})

app.listen(port, () => {
    console.log(`Car Doctor Server is Running on Port: ${port}`)
})