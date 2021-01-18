import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import '../VanillaAddTrip/VanillaAddTrip.css'
import * as tripAPI from '../../services/trip-api'


function VanillaAddTrip(props) {
  const history = useHistory()
  const [invalidForm, setValidForm] = useState(true)
  const formRef = useRef()

  const [state, handleChange] = useForm({
      startDate: '',
      endDate: '',
      tripName: '',
      departing: '',
      arriving: '',
      city: '',
      country: '',
    })

    async function handleAddTrip(newTripData) {
        await tripAPI.create(newTripData)
        history.push('/vanillatrip')
    }

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [state])

    async function handleSubmit(e) {
        e.preventDefault()
        handleAddTrip(state)
    }

	return (
		<h3>Add Trip Page</h3>
	)
}

export default VanillaAddTrip;