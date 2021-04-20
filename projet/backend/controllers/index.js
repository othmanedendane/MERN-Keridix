const Test = require("../models/modWorker");
const Testo = require("../models/modAdmin");

const workers = (req, res) => {
    Test.find().then((workers) => {
        res.json(workers)
    }
    ).catch((error) => {
        res.send(error)
    })
}

const login = (req, res) => {
    Test.findOne({ email: req.body.email })
        .then((worker) => {worker
            if (worker) {
                if (worker.code === req.body.code) {
                    return { worker: worker }
                }
                return {error:"mot de passe incorrect"}
            }
            return { error: "Aucun compte trouvé" }
            
        }).then((response) => {
          res.json(response)
        }
        ).catch((error) => {
        res.send(error)
    }
    )
}

const admins = (req, res) => {
    Testo.find().then((admins) => {
        res.json(admins)
    }
    ).catch((error) => {
        res.send(error)
    })
}

const adminlogin = (req, res) => {
    Testo.findOne({ name: req.body.name })
        .then((admin) => {admin
            if (admin) {
                if (admin.password === req.body.password) {
                    return { admin: admin }
                }
                return {error:"mot de passe incorrect"}
            }
            return { error: "Aucun compte trouvé" }
            
        }).then((response) => {
          res.json(response)
        }
        ).catch((error) => {
        res.send(error)
    }
    )
}
    


    
module.exports = { workers, login, admins, adminlogin  }