const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://nvs16:nvs1666@ds155278.mlab.com:55278/gql-nvs', { useNewUrlParser: true })
.catch(err => {console.log("Error:", err.message)});
mongoose.connection.once('open', () => {
    console.log("connected to database...");
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // equivalent to schema: schema
}));

app.listen(4000, () => {
    console.log("Listening on port 4000...")
});