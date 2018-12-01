const Curso = `
   # Tipo Curso que tiene 3 campos obligatorios
   type Curso {
      id: ID!
      titulo: String!
      # Esta es la descripcion del curso
      descripcion: String!
      profesor: Profesor
      rating: Float @deprecated(reason: "No creemos más en el puntaje")
      comentario: [Comentario]
  }

  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
  }
`;

module.exports = Curso