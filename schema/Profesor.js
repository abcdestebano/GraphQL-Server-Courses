const Profesor = `
   type Profesor {
      id: ID!
      nombre: String!
      nacionalidad: String!
      genero: Genero
      cursos: [Curso]
   }

   enum Genero {
      MASCULINO
      FEMENINO
   }

   input NewTeacher {
      nombre: String!
      genero: Genero
      nacionalidad: String!
   }
  
   input EditTeacher {
      nombre: String
      genero: Genero
      nacionalidad: String
   }
`

module.exports = Profesor