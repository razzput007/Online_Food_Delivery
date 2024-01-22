const express=require('express');
const app = express()
const cors=require('cors')
const port = 5000
const connectDB=require('./database/db')
const routes=require('./Routes/CreateUser')
connectDB();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/',routes);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


