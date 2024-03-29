const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express =  require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {

    res.send('Car Doctor is Running')

})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i5yg7cj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const verifyJWT = (req, res, next) => {

  console.log("Hitting Verify JWT")

  const authorization = req.headers.authorization

  if(!authorization){
    return res.status(401).send({error: true, message: 'Unauthorized Access'})
  }

  const token = authorization.split(' ')[1]
  console.log('Token inside verify JWT', token)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    
    if(error){
      return res.status(403).send({error: true, message: 'Unauthorized Access'})
    }

    req.decode = decoded;
    next()

  })

}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db('carDoctor').collection('services')
    const bookingCollection = client.db('carDoctor').collection('bookings');

    // jwt

    app.post('/jwt', (req, res) => {

      const user = req.body
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})

      res.send({token})

    })

    // services

    app.get('/services', async(req, res) => {

        const cursor = serviceCollection.find()
        const result = await cursor.toArray()
        res.send(result)

    })

    app.get('/services/:id', async(req, res) => {

        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const options = {projection: {title: 1, price: 1, service_id: 1, img: 1}}

        const result = await serviceCollection.findOne(query, options)
        res.send(result)

    })

    // booking

    app.post('/bookings', async (req, res) => {
      const booking = req.body;
      console.log(booking);
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });

    app.get('/bookings', verifyJWT, async(req, res) => {

      const decoded = req.decoded

      if(decoded.email !== req.query.email){

        return res.status(403).send({error: 1, message: 'forbidden access'})

      }

      let query = {}
      if(req.query?.email){
        query = {email: req.query.email}
      }
      const result = await bookingCollection.find(query).toArray()
      res.send(result)

    })

    app.patch('/bookings/:id', async(req, res) => {

      const updateBooking = req.body
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}

      const updateDoc = {

        $set:{
          status: updateBooking.status
        }

      }

      const result = await bookingCollection.updateOne(filter, updateDoc)

      res.send(result)

    })

    app.delete('/bookings/:id', async(req, res) => {

      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await bookingCollection.deleteOne(query)

      res.send(result)

    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Car Doctor Server is Running on Port: ${port}`)
})

//require('crypto').randomBytes(64).toString('hex')