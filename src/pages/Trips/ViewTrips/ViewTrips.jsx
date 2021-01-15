import React, {Component} from 'react';
import ItineraryCards from '../../../components/ItineraryCards/ItineraryCards'
import './ViewTrips.css'

const ViewTrips=({user})=> {


    return (
        <div>
            <>
            <div className='viewTrips'>
                <h1 key={user.id} className='viewTrips'> {user.name}'s Upcoming & Future Trips</h1>
                
                

                
                </div>
                
            </>
        </div>
    )
}



export default ViewTrips
