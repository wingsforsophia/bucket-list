import React from 'react';
import ItineraryCards from '../../../components/ItineraryCards/ItineraryCards'
import './ViewTrips.css'
import Calendar from '../../../components/DatePicker/DatePicker'

const ViewTrips=({user})=> {


    return (
        <div>
            <>
            <div className='viewTrips'>
                <h1 key={user.id} className='viewTrips'> {user.name}'s Upcoming & Future Trips</h1>
                    <Calendar/>
                    <ItineraryCards />
                
                
                </div>
                
            </>
        </div>
    )
}



export default ViewTrips
