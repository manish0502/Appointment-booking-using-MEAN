const status = require('http-status');
const Appointment = require("../models/appointment.model");
const Joi = require('@hapi/joi');


function patientController() {

  return {

    async findAll(req, res, next) {

      let result = await Appointment.find({})
      
      if(!result){
        res.status(status.INTERNAL_SERVER_ERROR).send("Server error")
      }
      res.status(status.ACCEPTED).send(result)
    },


    async deleteOne(req, res, next) {
      
      let {id } = req.params

      let result = await Appointment.findByIdAndDelete(id)
      
      if(!result){
        res.status(status.INTERNAL_SERVER_ERROR).send("Not Found")
      }
      res.status(status.ACCEPTED).json({
        msg:"Deleted successfully",
        result: `This item is deleted with Id = ${result._id}`
      })
    },



    async findOne(req, res, next) {

      let {id } = req.params

      let results = await Appointment.findById(id)

      if(!results){

        res.status(status.NOT_FOUND).send("Not Found")
      }       

      //return res.json(results)

       res.status(status.ACCEPTED).send(results)
    },

    async createAppointment(req, res, next) {
      const { appointmentDate, email, name, age, contact} = req.body;

      try {


        const schema = Joi.object().keys({

          appointmentDate: Joi.date().required(),
          email: Joi.string().min(4).required().email(),
          name: Joi.string().required(),
          age: Joi.number().required(),
          contact: Joi.number().optional(),
        })
  
         const { error }= schema.validate(req.body);

        // const validation = schema.validate(req.body);
        // res.send(validation);

        const value = await schema.validateAsync(req.body);
            
         if(error && error.details){
           return res.status(status.BAD_REQUEST).json(error)
         }


     let newAppointment = await Appointment.create(value);
      res.json({
        msg:"success",
        status:status.ACCEPTED,
        result: newAppointment
      });

      } catch (err) {
        console.log(err.message);
        res.status(status.BAD_REQUEST).send("Server Error");
      }
    },


    async updateInvoice(req, res, next) {
      const { item, qty, date, due, rate, tax } = req.body;

      try {


        const schema = Joi.object().keys({

          item: Joi.string().optional(),
          date: Joi.date().optional(),
          due: Joi.date().optional(),
          qty: Joi.number().integer()
               .optional(),
          rate: Joi.number().optional(),
          tax: Joi.number().optional(),
        })
  
         const { error , value }= Joi.validate(req.body , schema);

         if(error && error.details){
           return res.status(status.BAD_REQUEST).json(error)
         }
        let {id } = req.params

       let updatedInvoice = await Appointment.findByIdAndUpdate({ _id:id } ,value, {new : true});
      res.json({
        msg:"successfully updated",
        status:status.ACCEPTED,
        result: updatedInvoice
      });

      } catch (err) {
        console.log(err.message);
        res.status(status.BAD_REQUEST).send("Server Error");
      }
    },
  };


  
}

module.exports = patientController;
