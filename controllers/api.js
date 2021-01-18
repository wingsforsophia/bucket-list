const axios=require('axios')

module.exports={
    searchPlaces
}

function searchPlaces(req, res){
    axios
      .get(
        `https://api.tomtom.com/search/2/poiSearch/${req.body.query},musuems.json?key=${process.env.TOM_TOM_API_KEY}`
      )
      .then((response) => {
        res.json(response.data);
      });
}

