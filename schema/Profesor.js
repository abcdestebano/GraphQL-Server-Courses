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
`

module.exports = Profesor