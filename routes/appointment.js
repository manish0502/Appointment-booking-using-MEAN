const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller')
const authController = require('../controllers/auth.controller')
const patientController = require('../controllers/patient.controller')


router.get('/appointments' ,appointmentController().findAll)
router.post('/register' , authController().postRegister)
router.post('/login' , authController().postLogin)
router.post('/patient' , patientController().createAppointment);




module.exports = router;