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

   type Mutation {
      profesorAdd(teacher: NewTeacher): Profesor
      profesorEdit(idTeacher: String!, teacher: EditTeacher): Profesor
      profesorDelete(idTeacher: String!): Profesor
      cursoAdd(course: NewCourse): Curso
      cursoEdit(idCourse: String!, course: EditCourse): Curso
      cursoDelete(idCourse: String!): Curso
   }
`

module.exports = makeExecutableSchema({
   typeDefs: [rootQuery, Curso, Profesor],
   resolvers
})