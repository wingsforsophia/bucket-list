import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import * as itemAPI from '../../services/item-api'


function AddItem(props) {
  const history = useHistory()
  const [invalidForm, setValidForm] = useState(true)
  const formRef = useRef()

  const [state, handleChange] = useForm({
    dateTime: '',
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
        <h1>hi this is item add page</h1>
     );
}
 
export default AddItem;