'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cursoSchema = new Schema({
   _id: Schema.Types.ObjectId,
   titulo: { type: String, required: true },
   descripcion: { type: String, required: true },
   profesor: { type: Schema.Types.ObjectId, ref: 'Profesores' },
   rating: { type: Number },
   comentarios: [{ type: Schema.Types.ObjectId, ref: 'Comentarios' }]
});

module.exports = mongoose.model('Cursos', cursoSchema);