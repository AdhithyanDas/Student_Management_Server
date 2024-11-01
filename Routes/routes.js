const express = require('express')

const userController = require('../Controllers/userController')
const studentController = require('../Controllers/studentController')

const jwtMiddle = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerConfig')

const router = express.Router()

router.post('/reg', userController.userRegistration)
router.post('/log', userController.userLogin)

router.post('/addstudent', jwtMiddle, multerConfig.single('image'), studentController.addStudent)
router.get('/getstudents', jwtMiddle, studentController.getStudents)
router.delete('/deletestudent/:sid', jwtMiddle, studentController.deleteStudent)
router.put('/updatestudent/:sid', jwtMiddle, multerConfig.single('image'), studentController.updateStudents)

module.exports = router