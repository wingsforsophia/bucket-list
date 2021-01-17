import React from 'react';
import ItineraryCards from '../../../components/ItineraryCards/ItineraryCards'
import './ViewTrips.css'
import Calendar from '../../../components/DatePicker/DatePicker'
import Countdown from '../../../components/Counter/Countdown'

const ViewTrips=({user})=> {


    return (
        <div>
            <>
            <div className='viewTrips'>
                <h1 key={user.id} className='viewTrips'>  Upcoming & Future Trips</h1>
                <div className='trips'>
                    <div className='planner'>
                      <Countdown/>
                      <Calendar/>  
                    </div>
                    <div className='itineraryTrips'>
                    <h2 className='viewTrips'>{user.name}'s Itineraries</h2>
                       <ItineraryCards /> 
                    </div>
                    
                </div>
                
                </div>
                
            </>
        </div>
    )
}



export default ViewTrips
