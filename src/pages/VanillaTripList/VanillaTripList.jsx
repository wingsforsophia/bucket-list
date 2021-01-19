import React, { useState, useEffect }  from 'react'
import * as tripAPI from '../../services/trip-api'
import VanillaTripShowCard from '../../components/VanillaTripShowCard/VanillaTripShowCard'

const VanillaTripList = (props) => {
    
    const [trips, setTrips]= useState([])

    async function handleDeleteTrip(id) {
      await tripAPI.deleteTrip(id)
      setTrips(trips.filter(trip => trip._id !== id))
    }

    useEffect(() => {
        (async function(){
          const trips = await tripAPI.getAll();
          setTrips(trips);
        })();
      }, [])


    return ( 

      <>
       <h1>Trip list</h1>
    </>

     );
}
 
export default VanillaTripList;