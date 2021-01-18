import React from 'react';
import ItineraryCards from '../../../components/ItineraryCards/ItineraryCards'
import './ViewTrips.css'
import Calendar from '../../../components/Calendar/Calendar'
import Countdown from '../../../components/Counter/Countdown'

const ViewTrips=({user})=> {


    return (
        <div>
            <>
            <div className='viewTrips'>
                <h1  className='viewTrips'> Bucket List</h1>
                <div className='trips'>
                    <div className='planner'>
                      <Countdown/>
                    </div>
                    <div className='itineraryTrips'>
                    <h2 key={user.id}className='viewTrips'>Upcoming & Future Trips for {user.name} </h2>
                       <ItineraryCards /> 
                    </div>
                    
                </div>
                
                </div>
                
            </>
        </div>
    )
}



export default ViewTrips
