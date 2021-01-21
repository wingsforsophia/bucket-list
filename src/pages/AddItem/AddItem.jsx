import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import * as itemAPI from '../../services/item-api'
// import Datetime from 'react-datetime'
// import Calendar from '../../components/Calendar/Calendar'


function AddItem(props) {
  const history = useHistory()
  const [invalidForm, setValidForm] = useState(true)
  const formRef = useRef()

  const [state, handleChange] = useForm({
    date: '',
    time: '',
    location: '',
    notes: '',
    completed: false,
    tickets: false, 
    reservations: false   
  })

  async function handleAddItem(newItemData) {
    await itemAPI.create(newItemData)
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
                    <label htmlFor="departing">Time</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="arriving" id="arriving" type="text"  value={state.arriving} onChange={handleChange}/>
                    <label htmlFor="arriving">Arriving at (ex. CDG)</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="city" id="city" type="text" value={state.city} onChange={handleChange}/>
                    <label htmlFor="city">City</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="country" id="country" type="text"  value={state.country} onChange={handleChange}/>
                    <label htmlFor="country">Country</label>
                  </div>
                </div>
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