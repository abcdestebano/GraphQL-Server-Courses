'use strict'

const Curso = require('./Curso')
const Profesor = require('./Profesor')

const resolvers = {
   Query: {
      cursos: () => Curso.getAllCourses(),
      profesores: () => Profesor.getAllTeachers(),
      curso: (_, { id }) => Curso.getCourse(id),
      profesor: (_, { id }) => Profesor.getTeacher(id)
   },
   Mutation: {
      profesorAdd: (_, { teacher }) => Profesor.createTeacher(teacher),
      cursoAdd: (_, { course }) => Curso.createCourse(course)
   }
}

module.exports = resolvers