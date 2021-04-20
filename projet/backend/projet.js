const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const connection = mongoose.connection
const app = express();
let routes = require('./routes');
const bodyParser = require('body-parser');
const passport = require("passport");
//var passport = require("passport");
//const session = require("express-session");
const cookieParser = require("cookie-parser");
//const expressJwt = require("express-jwt");
const toto = require('./models/modWorker');
const tata = require('./models/modAdmin');
//const { urlencoded } = require('express');
const cors = require("cors");
//let routes = require('./routes');
const PORT = 3510;
//app.use(session({ secret: 'somevalue' }));

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json()); //Lire les objects JSON a l'aide du body-parser
app.use(bodyParser.urlencoded({extended:true})); //Lire les adresses URL envoyer par le client / lire les object arrivant par le web 

app.use(cookieParser());

app.use('/', routes);


const url = "mongodb+srv://bdkeridix:admin123@cluster0.lzwrc.mongodb.net/bdkeridix?retryWrites=true&w=majority"

mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true });
//mongoose.connect('mongodb://localhost:27017/bdkeridix',({useUnifiedTopology: true, useNewUrlParser: true }));
//mongoose.connect('mongodb://odendane:odendane@10.30.40.121:27017/odendane',{ useUnifiedTopology: true, useNewUrlParser: true }  );
mongoose.set('useFindAndModify', false);
;
//################################### TEST ###########################################
/*
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}))
app.use(cookieParser(process.env.SECRET))
app.use(passport.initialize());
app.use(passport.session());

// ------------------ PASSPORT CONFIG --------------------
passport.use(User.createStrategy());

passport.serializeUser(function(users, done) {
	done(null, users.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, users) {
		done(err, users);
	});
});*/

//####################################################################################

// ###################### ajout de worker ######################
app.post('/newuser', (req, res) => {
    console.log('req.body', req.body);
    const cho = new toto(req.body);
    cho.save((err, cho) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(cho);
    });
});




// ################### affichage de worker ######################
app.get('/selectuser', (req,res) => {
    toto.find()
    .exec()
    .then(user => res.status(200).json(user));});
  
    app.get('/selectuser/:id',(req,res,next)=>{

        var id = req.params.id;
        toto.findById(id).then(x => {
          if (!x){
            return res.status(404).end();
          }
          return res.status(200).json(x);
        // eslint-disable-next-line no-undef
        }).catch (err=> next(err));
        });

//################## Update worker ###################
app.post('/Update/:id',(req,res)=> {
    const id = req.params.id;
    const update = req.body;
     toto.findByIdAndUpdate(id,update,(err,user)=>{
  if(err){ return res.status(500).json(err); }
  res.status(202).json ({msg : `Le User avec l id ${user._id} est modifie avec succes! `});}); });

  //################## Delete worker ###################
  app.delete('/Delete/:id', (req,res)=> {
    const id = req.params.id;
    toto.findByIdAndDelete(id, (err, user)=>{  
      if (err) { return res.status(500).json(err); }
      res.status(202).json ({msg : `L'utilisateur avec l id ${user._id} est supprimee avec succes ! `});});  });
  
  

   //################## Connexion worker ###################     
        /*toto.find().then((toto) => {
            res.json(toto)
        }
        ).catch((error) => {
            res.send(error)
        })*/
    
    
    /*app.post('/connexion', (req, res) => {
        toto.findOne({ user: req.body.user })
            .then((worker) => {
                if (worker) {
                    if (worker.code === req.body.code) {
                        return { worker: worker }
                    }
                    return {error:"le nom d'utilisateur ou le mot de passe est incorrect"}
                }
                return { error: "no user found" }
                
            }).then((response) => {
              res.json(response)
            }
            ).catch((error) => {
            res.send(error)
        }
        )
    });*/



//########################### TEST2 ####################################
/*
app.post("/log", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			throw err;
		}
		if (!user) {
			res.status(401).send(info);
		}
		else {
			req.logIn(user, (err) => {
				if (err) throw err;
				res.redirect('/account');
			});
		}
	})(req, res, next);
});

app.get('/logout', (req, res) => {
	req.logout();
	res.status(200).send('Successfully logged out.');
})

app.get("/user", (req, res) => {
	res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});
*/
//######################################################################







  app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
  });
  connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
  });
  
