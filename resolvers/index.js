'use strict'

const Curso = require('./Curso')
const Profesor = require('./Profesor')

const resolvers = {
   Query: {
      cursos: () => Curso.getAllCourses(),
      profesores: () => Profesor.getAllTeachers(),
      curso: (_, { id }) => Curso.getCourse(id),
      profesor: (_, { id }) => Profesor.getTeacher(id),
      buscar: async (_, { query }) => {
         const teachers = await Profesor.getTeacherByName(query)
         const courses = await Curso.getCourseByName(query)
         return teachers.concat(courses);
      }
   },
   ResultadoBusqueda: {
      // Hacemos uso del metodo __resolveType que nos permite recibir el objeto resultante del buscar en el
      // rootQuery para poder hacer la comparacion de que devolver segun los resultados.
      __resolveType: obj => {
        if (obj.nombre) return "Profesor";
        if (obj.titulo) return "Curso";
        return [];
      }
    },
   Mutation: {
      profesorAdd: (_, { teacher }) => Profesor.createTeacher(teacher),
      profesorEdit: (_, { id, teacher }) => Profesor.updateTeacher(id, teacher),
      profesorDelete: (_, { id }) => Profesor.deleteTeacher(id),
      cursoAdd: (_, { course }) => Curso.createCourse(course),
      cursoEdit: (_, { id, course }) => Curso.updateCourse(id, course),
      cursoDelete: (_, { id }) => Curso.deleteCourse(id),
   }
}

module.exports = resolvers