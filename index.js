'use strict'

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')

const config = require('./config')
const schema = require('./schema')

const app = express()

app.use(bodyParser.json())

const server = new ApolloServer({
   schema,
   formatError: error => {
      const { code, errorName } = error.extensions.exception;
      return {
         statusCode: code,
         errorName: errorName,
         message: error.message
      }
   }
});


server.applyMiddleware({ app });

mongoose.connect(config.DATABASE, { useNewUrlParser: true }, (err) => {
   if (err) throw err;
   else {
      app.listen({ port: config.PORT }, () => {
         console.log('💾  Database connected succesfully ')
         console.log(`🚀  Server ready at http://localhost:${config.PORT}${server.graphqlPath}`)
      })
   }
})

