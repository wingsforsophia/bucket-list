const Item = require('../models/item')
const Trip = require('../models/trip')

module.exports = {
    create,
    index
}

function create (req, res) {
  Item.create(req.body)
    .then((item) => {
        Trip.findById(req.params.id)
          .then((trip) => {
              trip.itinerary.push(item._id)
              trip.save()
                .then((trip) => {
                    res.json(trip)
                })
          })
    })
}

function index (req, res) {
    Trip.findById(req.params.id)
    .populate('itinerary')
      .then((trip) => {
        res.json(trip)
      })

}




