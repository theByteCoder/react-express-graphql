const dotEnv = require('dotenv')
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')

dotEnv.config()

const app = express()
const port = process.env.PORT

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})