import React, { useState, useEffect }  from 'react'
import * as tripAPI from '../../services/trip-api'

const VanillaTripList = (props) => {
    
    const [trips, setTrips]= useState([])

    useEffect(() => {
        (async function(){
          const trips = await tripAPI.getAll();
          setTrips(trips);
        })();
      }, [])


    return ( 

        <h3>Trip List</h3>

     );
}
 
export default VanillaTripList;