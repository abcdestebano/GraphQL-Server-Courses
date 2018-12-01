'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const comentarioSchema = new Schema({
   _id: Schema.Types.ObjectId,
   nombre: { type: String, required: true },
   cuerpo: { type: String, required: true }
});

module.exports = mongoose.model('Comentarios', comentarioSchema);