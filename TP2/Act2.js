//Requirements
var express = require('express')
var logger = require("morgan");
const bodyParser = require('body-parser');

var app = express()
app.use(logger('dev'));
app.use(express.json())
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { body, validationResult } = require('express-validator');
///POST 
///express-validator
//middlwares
app.post('/Countries', 
///Sanitization

body('id').isInt(),
body('Name').not().isEmpty().trim().escape(),
body('Nombre de daïras').isInt(),
body('Nombre de communes').isInt(),
body('about').not().isEmpty().trim().escape(),
body('lat').isFloat(),
body('long').isFloat(),
(req, res, next)=>  {
    let content = req.body;
    const errors = validationResult(req);
	
// id and Name should not be EMPTY
    if (!content.id && !content.Name) { 
        return res.status(400).json('La wilaya nest pas ajoutee');
    }

// verification if the State is successesfuly ADDED
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    } 
    res.status(200).json({
        success: true,
        message: 'ajoute avec success',
        
    })
    
});

// catching the 404 error msg and pushing it to error handler using next ()

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

// error handler

app.use((error, req, res, next) => {
      // render the error page

    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})

module.exports = app;