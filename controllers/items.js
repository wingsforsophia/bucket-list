const Item = require('../models/item')
const Trip = require('../models/trip')

module.exports = {
    create
}

function create (req, res) {
  Trip.findById(req.params.id)
    .then((trip) => {
        trip.itinerary.push(req.body)
    })
}

