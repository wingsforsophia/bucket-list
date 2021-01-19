import React from 'react';
import { Link } from 'react-router-dom';

function VanillaTripCard({ user, trip, handleDeleteTrip }) {
    return(
        <>
        <div className=" card">
            <div className="card-image waves-effect waves-block waves-light">
                <img alt="trip" className="activator" src="https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png" onClick={()=> {}}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{trip.name}<i className="material-icons right">more_vert</i></span>
                <p>{trip.startDate}</p>
                <p>{trip.endDate}</p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{trip.name}<i className="material-icons right">close</i></span>
                <h6>Added By:  {trip.addedBy.name}</h6>
                <h6>Departing: {trip.departing}</h6>
                <h6>Arriving: {trip.arriving}</h6>
                <div>City:  {trip.country}</div>
                <div>Country: {trip.country}</div>
                    {user && (user._id === trip.addedBy._id) &&
                    <>
                        <button type="submit" className="btn red" onClick={() => handleDeleteTrip(trip._id)}>
                        <i className="material-icons left">delete</i>    
                            Delete Trip
                        </button>
                        <Link 
                            className="btn yellow black-text"
                            to={{
                                pathname: '/editTV',
                                state: {trip}
                            }}
                        ><i className="material-icons left">build</i>
                            Edit TV Show
                        </Link>
                    </>
                }
            </div>
        </div>
    </>
    ) 
}

export default VanillaTripCard;