require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express();

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>StoreApi</h1><a href="/api/vi/products">products route</a>')
})


app.use('/api/v1/products', productsRouter)

//products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to the port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()
