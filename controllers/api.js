const axios=require('axios')



module.exports={
    searchPlaces
}


function searchPlaces(req, res){
    console.log('HERE')
    axios
      .get(
        `https://api.tomtom.com/search/2/poiSearch/Chicago,Il,attractions.json?key=${process.env.TOM_TOM_API_KEY}`
      )
      .then((response) => {
        res.json(response.data);
      });
    // console.log(res)
}

// https://api.tomtom.com/search/2/poiSearch/chicago.json?key=3bQm6h7bd8TJyO9QEon4Ib2ZB0Pa7eGq