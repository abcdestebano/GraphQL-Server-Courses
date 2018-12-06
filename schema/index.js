'use strict'
const { gql, makeExecutableSchema } = require('apollo-server');

// TYPES
const Curso = require('./Curso')
const Profesor = require('./Profesor')

// RESOLVERS
const resolvers = require('../resolvers')

const rootQuery = gql`
   union ResultadoBusqueda = Profesor | Curso

   type Query {
      cursos: [Curso]
      profesores: [Profesor]
      curso(id: String!): Curso
      profesor(id: String!): Profesor
      buscar(query: String!): [ResultadoBusqueda]
   }

   type Mutation {
      profesorAdd(teacher: NewTeacher): Profesor
      profesorEdit(id: String!, teacher: EditTeacher): Profesor
      profesorDelete(id: String!): Profesor
      cursoAdd(course: NewCourse): Curso
      cursoEdit(id: String!, course: EditCourse): Curso
      cursoDelete(id: String!): Curso
   }
`

module.exports = makeExecutableSchema({
   typeDefs: [rootQuery, Curso, Profesor],
   resolvers
})