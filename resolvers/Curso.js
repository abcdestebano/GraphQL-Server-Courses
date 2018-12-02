'use strict'

const Curso = require('../models/Curso')
const mongoose = require('mongoose')

/**
 * Get all courses from database
 * 
 * @returns
 */
async function getAllCourses() {
   try {
      const courses = await Curso.find().populate('profesor')
      return courses
   } catch (error) {
      throw new Error(error)
   }
}

/**
 * Get a course by Id from database
 *
 * @param {*} id
 * @returns
 */
async function getCourse(id) {
   try {
      const course = await Curso.findById(id)
         .populate({ path: "profesor", populate: { path: "cursos" } })
         .populate("comentarios")

      return course
   } catch (error) {
      throw new Error(error)
   }
}

/**
 * Create a course in the database
 *
 * @param {*} { titulo, descripcion }
 * @returns
 */
async function createCourse({ titulo, descripcion, profesor }) {
   const course = new Curso({
      _id: mongoose.Types.ObjectId(),
      titulo,
      descripcion,
      profesor
   })
   try {
      const courseStored = await course.save()
      return courseStored
   } catch (error) {
      throw new Error(error)
   }
}


/**
 * Update a course by id in the database
 *
 * @param {*} id
 * @param {*} curso
 * @returns
 */
async function updateCourse(id, curso) {
   try {
      const course = await Curso.findByIdAndUpdate({ _id: id }, curso, { new: true, upsert: true })
      return course
   } catch (error) {
      throw new Error(error)
   }
}

/**
 * Delete a course from the database
 *
 * @param {*} id
 * @returns
 */
async function deleteCourse(id) {
   try {
      const course = await Curso.findByIdAndRemove({ _id: id }, { select: '_id titulo descripcion rating profesor' })
      return course
   } catch (error) {
      throw new Error(error)
   }
}


module.exports = {
   getAllCourses,
   getCourse,
   createCourse,
   updateCourse,
   deleteCourse
}