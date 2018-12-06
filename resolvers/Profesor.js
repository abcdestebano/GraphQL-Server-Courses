'use strict'

const Profesor = require('../models/Profesor')
const mongoose = require('mongoose')

/**
 * Get all teachers from database
 * 
 * @returns
 */
async function getAllTeachers() {
   try {
      const teachers = await Profesor.find().populate('cursos')
      return teachers
   } catch (error) {
      throw new Error(error)
   }
}

/**
 * Get a teacher by name from database
 *
 * @param {*} id
 * @returns
 */
async function getTeacherByName(nombre) {
   try {
      const teachers = await Profesor.find({ nombre: { '$regex': nombre } }).populate({
         path: 'cursos',
         populate: { path: "comentarios" }
      })
      return teachers
   } catch (error) {
      throw new Error(error)
   }
}

/**
 * Get a teacher by Id from database
 *
 * @param {*} id
 * @returns
 */
async function getTeacher(id) {
   try {
      const teacher = await Profesor.findById(id).populate({
         path: 'cursos',
         populate: { path: "comentarios" }
      })
      return teacher
   } catch (error) {
      throw new Error(error)
   }
}

/**
 * Create a teacer on the database
 *
 * @param {*} { nombre, nacionalidad, genero }
 * @returns
 */
async function createTeacher({ nombre, nacionalidad, genero }) {
   const nuevoProfesor = new Profesor({
      _id: mongoose.Types.ObjectId(),
      nombre,
      nacionalidad,
      genero
   });
   try {
      const teacherStored = nuevoProfesor.save()
      return teacherStored
   } catch (error) {
      throw new Error(error)
   }
}


/**
 * Update a teacher by id in the database
 *
 * @param {*} id
 * @param {*} curso
 * @returns
 */
async function updateTeacher(id, profesor) {
   try {
      const teacher = await Profesor.findByIdAndUpdate({ _id: id }, profesor, { new: true, upsert: true })
      return teacher
   } catch (error) {
      throw new Error(error)
   }
}

/**
 * Delete a teacher from the database
 *
 * @param {*} id
 * @returns
 */
async function deleteTeacher(id) {
   try {
      const teacher = await Profesor.findByIdAndRemove({ _id: id }, { select: '_id nombre nacionalidad genero' })
      return teacher
   } catch (error) {
      throw new Error(error)
   }
}


module.exports = {
   getAllTeachers,
   getTeacherByName,
   getTeacher,
   createTeacher,
   updateTeacher,
   deleteTeacher
}