import React, { useState, useEffect }  from 'react'
import * as tripAPI from '../../services/trip-api'
import VanillaTripCard from '../../components/VanillaTripCard/VanillaTripCard'
import '../VanillaTripList/VanillaTripList.css'

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
      <div className='TripList-grid'>
        {trips.map(trip =>
          <VanillaTripCard 
            key={trip._id}
            trip={trip}
            user={props.user}
            handleDeleteTrip={handleDeleteTrip}
          />
        )}
      </div>
    </>

     );
}
 
export default VanillaTripList;