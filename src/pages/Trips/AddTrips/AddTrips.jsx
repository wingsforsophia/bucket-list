import React from 'react'
import './AddTrip.css'
import TripCards from '../../../components/TripCards/TripCard'
import AddTripForm from '../../../components/AddTripForm/AddTripForm'
import Calendar from '../../../components/Calendar/Calendar'

function AddTrips() {
    return (
        <div className='addTripBody'>
            <> 
            <h1 className='addTrips'>Add Destination/Trip</h1>
            <div className='addTrips'>
                <div className='addTripDates'>
                <AddTripForm/>
                <br/>
                <Calendar/>
                </div>
                <br/>
                <TripCards className='tripCards'/>
            </div>
            </>
        </div>
    )
}

export default AddTrips
