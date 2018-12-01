'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profesorSchema = new Schema({
   _id: Schema.Types.ObjectId,
   nombre: { type: String, required: true },
   nacionalidad: { type: String, required: true },
   genero: { type: String, required: true },
   cursos: [{ type: Schema.Types.ObjectId, ref: 'Cursos' }]
});

module.exports = mongoose.model('Profesores', profesorSchema);