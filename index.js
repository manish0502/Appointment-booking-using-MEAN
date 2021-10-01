const express = require('express');
const connectDB = require('./config/db')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session'); 
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var path = require('path')
const flash = require('express-flash');
var appointmentApi = require('./routes/appointment')
var passport = require('passport');


connectDB();

// Intialize Middleware

app.use(logger('dev'))
app.use(cors({
    origin: ['http://localhost:4200'],
    credentials:true
}));


/*********************** Passport Configration ************************************/

app.use(session({

    name:'myname.sid',
    secret: 'keyboard',
    resave: false,
    saveUninitialized:false,
    cookie:
        {
            maxAge: 1000 * 60 * 60 * 24 ,
            httpOnly: false,
            secure: false

        }

}))
const passportInit = require('./passport/passport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

/*********************** Using Flash as middleware ********************************/

app.use(flash());
app.use(bodyParser.json());
app.use(express.json({extended : false}));
app.use(cookieParser());


app.get('/' ,(req, res, next) => {
    res.send(`Hello from Index.js`)
})

app.use(express.static(path.join(__dirname ,'public')));




app.use('/api', appointmentApi);

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`Server is Running at Port ${PORT}`);
})