const dotEnv = require('dotenv')
const express = require('express')
const cors = require('cors')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

dotEnv.config()

const app = express()
const port = process.env.PORT
const MONGO_PORT = process.env.MONGO_PORT

mongoose
    .connect(
        `mongodb://localhost:${MONGO_PORT}/books-authors`,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log(`Mongodb connected on port ${MONGO_PORT}`))
    .catch((err) => {
        console.err(err.message);
        process.exit(1);
    });

app.use(cors())
app.use(express.json())

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Express listening to port ${port}`)
})