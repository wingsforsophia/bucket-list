import React from 'react'
import './AddTrip.css'
import TripCards from '../../../components/TripCards/TripCard'

function AddTrips() {
    return (
        <div>
            <>
            <div className='addTrips'>
                <h1 className='addTrips'>Add Destination/Trip</h1>
                <TripCards className='tripCards'/>
            </div>
            </>
        </div>
    )
}

export default AddTrips
