const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller')
const authController = require('../controllers/auth.controller')
const patientController = require('../controllers/patient.controller')


router.get('/appointments' ,appointmentController().findAll)
router.post('/register' , authController().postRegister)
router.get('/user' , authController().findUser)
router.post('/login' , authController().postLogin)
router.post('/patient' , patientController().createAppointment);
router.get('/patient' , patientController().findAll)
router.get('/patient/:id' , patientController().findOne)
router.put('/patient/:id' , patientController().updateAppointment)
router.delete('/patient/:id' , patientController().deleteOne)





module.exports = router;