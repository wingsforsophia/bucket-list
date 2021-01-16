const Trip = require('../models/trip')

module.exports = {
   index, 
   show, 
   create, 
   update, 
   delete: deleteTrip
}

function index (req, res) {
    res.send('<h1>yay trips</h1>')
    Trip.find({}).then((trips) => res.json(trips));
}



function show (req, res) {
    
}

function create (req, res) {
    
}

function update (req, res) {
    
}

function deleteTrip (req, res) {
    
}

