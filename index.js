const express = require('express');
const cors = require("cors");
var cors0ptions = { 
    origin: "http://localhost:4000/"
};

const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
// const routesAuth = require('./routes/auth.routes')
// const routesUser = require('./routes/user.routes')
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
app.use(cors(cors0ptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req,res) => { 
    res.json({message: "Welcome to my webapp!"});
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);
// app.use('/', routesAuth );
// app.use('/', routesUser);
// DB Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
    initial();
})
.catch( (err) => {
    console.log(err);
    process.exit();
});

const db = require("./models")
const Role = db.role; 
// db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
// {useNewUrlParser: true,useUnifiedTopology: true
// })
// .then(() => { 
//     console.log("Successfully connected to MONGODB.");
//     initial();
// })
// .catch(err => { 
//     console.error("Connection error", err );
//     process.exit();
// });

function initial(){
    Role.estimatedDocumentCount((err, count) => { 
        if (!err && count === 0 ) { 
            new Role({ 
                name: "user"
            }).save(err => { 
                if (err) { 
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });
            new Role({ 
                name: "moderator"
            }).save(err => { 
                if (err) { 
                    console.log("error", err);
                }
                console.log("added 'moderator' to roles collection");
            });
            new Role({ 
                name: "admin"
            }).save(err=> { 
                if( err ) { 
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}
/*
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build', routesHandler));
    });
}
*/

require('./routes/auth.routes')( app );
require('./routes/user.routes')( app );

const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});