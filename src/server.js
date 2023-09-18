const express = require('express')
const cors = require('cors')
const routes = require('./routes/circuitRoutes')
const app = express()
const  env = require('dotenv');

app.use(express.json())
app.use(cors())
app.use('/circuits', routes)


const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});