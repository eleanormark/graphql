const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin requests.
app.use(cors());


mongoose.connect('mongodb://eleanor:password01@ds125841.mlab.com:25841/graphql-box');
mongoose.connection.once('open', () => {
  console.log('Conneted to database.');
});

// Bind express with graphql.
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 400.')
})