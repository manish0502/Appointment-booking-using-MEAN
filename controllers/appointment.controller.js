const status = require('http-status');
const Appointment = require("../models/appointment.model");
const bcrypt = require("bcrypt");
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

function appointmentController(){

    return {


         async findAll(req , res , next) {

            res.json({
                msg:"Hii from Appointment",
                status: 200,
            })

           
        }
    }

}



module.exports = appointmentController;