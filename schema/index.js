'use strict'
const { gql, makeExecutableSchema } = require('apollo-server');

// TYPES
const Curso = require('./Curso')
const Profesor = require('./Profesor')

// RESOLVERS
const resolvers = require('../resolvers')

const rootQuery = gql`
   type Query {
      cursos: [Curso]
      profesores: [Profesor]
      curso(id: String!): Curso
      profesor(id: String!): Profesor
   }
`

module.exports = makeExecutableSchema({
   typeDefs: [rootQuery, Curso, Profesor],
   resolvers
})