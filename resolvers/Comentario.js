'use strict'

const Comentario = require('../models/Comentario')

async function getAllComments() {
   try {
      const comments = await Comentario.find()
      return comments
   } catch (error) {
      throw new Error(error)
   }
}


module.exports = {
   getAllComments
}