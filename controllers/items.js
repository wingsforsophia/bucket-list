const Item = require("../models/item");
const Trip = require("../models/trip");

module.exports = {
  create,
  index,
  update,
  delete: deleteItem,
};

function create(req, res) {
  req.body.addedBy = req.user._id
  Item.create(req.body).then((item) => {
    Trip.findById(req.params.id).then((trip) => {
      trip.itinerary.push(item._id)
      trip.save().then((trip) => {
        res.json(trip);
      });
    });
  });
}

function index(req, res) {
  //to see all itinerary items for a trip
  Trip.findById(req.params.id)
    .populate("itinerary")
    .then((trip) => {
      res.json(trip);
    }).catch((err) => {
      res.json(err);
    });
    
}

function update(req, res) {
  Item.findByIdAndUpdate(req.params.itemId, req.body, { new: true }).then(
    (item) => {
      res.json(item);
    }
  );
}

function deleteItem(req, res) {
//   Item.findByIdAndDelete(req.params.itemId)  
  Trip.findById(req.params.id)
  .then((trip) => {
      const idx = trip.itinerary.findIndex(item => item._id === req.params.itemId)
      trip.itinerary.splice(idx, 1)
      trip.save()
      .then((trip) => {
          res.json(trip)
      })
  })

}
