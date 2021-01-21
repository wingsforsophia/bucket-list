import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import * as itemAPI from '../../services/item-api'


function AddItem(props) {
  const history = useHistory()
  const location = useLocation()
  const [invalidForm, setValidForm] = useState(true)
  const formRef = useRef()

  const [state, handleChange] = useForm({
    date: '',
    time: '',
    location: '',
    notes: '',
    tripId: location.state.trip._id,
    // completed: false,
    // tickets: '', 
    // reservations: ''   
  })

  async function handleAddItem(newItemData) {
    await itemAPI.create(newItemData, state.tripId)
    history.push('/items') 
}
    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [state])

    async function handleSubmit(e) {
        e.preventDefault()
        handleAddItem(state)
    }

    return (
        <>
          <div className="AddItem">
            <form className="col s12" ref={formRef} onSubmit={handleSubmit}>

            <div className="row">
                  <div className="input-field col s12">
                    <input name="date" id="date" type="date" value={state.date} onChange={handleChange} required />
                    <label htmlFor="startDate">Date</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="time" id="time" type="text" value={state.time} onChange={handleChange}/>
                    <label htmlFor="time">Time</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="location" id="location" type="text"  value={state.location} onChange={handleChange}/>
                    <label htmlFor="location">Location</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="notes" id="notes" type="text"  value={state.notes} onChange={handleChange}/>
                    <label htmlFor="notes">Notes</label>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="input-field col s12">
                    <input name="completed" id="completed" type="checkbox" value={state.completed} onChange={handleChange}/>
                    <label htmlFor="city">Completed?</label>
                  </div>
                </div> */}
                {/* <div className="row">
                  <div className="input-field col s12">
                    <input name="tickets" id="tickets" type="checkbox"  value={state.tickets} onChange={handleChange}/>
                    <label htmlFor="tickets">Tickets needed?</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="reservations" id="reservations" type="checkbox"  value={state.reservations} onChange={handleChange}/>
                    <label htmlFor="reservations">Reservations needed?</label>
                  </div>
                </div> */}
                <button
                    type="submit"
                    disabled={invalidForm}
                >
                  
                  Add Item
                </button>                           
            </form>
          </div>
        </>
      )
}
 
export default AddItem;