import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
// import 'bootstrap/dist/css/bootstrap.min.css';

function TripShowCard({ user, trip, handleDeleteTrip}) {
 
  
  return(
        
        <>
        {trip.addedBy._id === user._id ? 
        <Card style={{width: '18rem', height: '25rem'}}>
  <Card.Body>
    <Card.Title className="mb-2 text-muted">Trip Name: {trip.tripName}</Card.Title><br />
    <Card.Subtitle className="mb-2 text-muted">Dates: {trip.startDate} - {trip.endDate}</Card.Subtitle><br />
    <Card.Subtitle className="mb-3 text-muted">City: {trip.city}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">Country: {trip.country}</Card.Subtitle>
    <Card.Text className="mb-2 text-muted"> Departing from: {trip.departing}</Card.Text>
    <Card.Text className="mb-2 text-muted"> Arriving in: {trip.arriving}</Card.Text>
    <Card.Link href="/vanillatrips" type="submit" onClick={() => handleDeleteTrip(trip._id)}>Delete Trip</Card.Link><br />
    <Link to={{ 
      pathname: '/edittrip',
      state: {trip}
    }}  >Edit Trip</Link><br />
    <Link to={{ 
      pathname: '/additem',
      state: {trip}
    }}  >Add Itinerary Item</Link><br />
     <Link to={{ 
      pathname: '/items',
      state: {trip}
    }}  >View Itinerary</Link><br />
    
  </Card.Body>
</Card>
      :
      <h1 hidden >you have no trips</h1>}
        </>
    ) 
}

export default TripShowCard;