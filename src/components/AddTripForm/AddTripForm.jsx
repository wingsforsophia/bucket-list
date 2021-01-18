import React, {useState} from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";


function AddTripForm() {
    

      const [data, setData] = useState(['id']);
      const { register, getValues, watch, handleSubmit, control } = useForm();
      const at = watch("at", 2);
   
    
      const append = () => {
        setData([...data, { id: '' }]);
      };
    
      const remove = index => {
        setData([...data.slice(0, index), ...data.slice(index + 1)]);
      };
    
      const update = index => {
        const data = getValues();
        data[index].id = data[`field${index}`];
        setData([...data]);
      };
    
      // const insert = index => {
      //   setData([
      //     ...data.slice(0, index),
      //     { result: "", id:'' },
      //     ...data.slice(index)
      //   ]);
      // };
    
      const onSubmit = data => console.log(data);
    
      
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className='addTripForm'>
          <p className='addTripForm'>To add a trip or destination, allowing you to add,  delete, edit prior to submitting</p>
          <ul className='addTripForm'>
            {data.map((item, index) => (
              <div>
                <li className='addTripForm' key={`wtf${index}`}>    <select>
                  <option value='date'>Date</option>
                  <option value='departing'>Departure Date</option>
                  <option value='arriving'>Arriving</option>
                  <option value='city'>City</option>
                  <option value='country'>Country</option>
                </select>
                <Controller
                  key={`wtf${index}`}
                  as={<input />}
                  placeholder="Enter cooresponding details with dropdown selection"
                  name={`field${item.id}`}
                  control={control}
                  className='addTripFrom'
                />
                <button onClick={() => remove(index)}>Delete</button>
                <button onClick={() => update(index)}>Edit</button>
              </li></div>
            ))}
          </ul>
          <section className='addFormTrip'>
            <button
              type="button"
              onClick={() => {
                append();
              }}
            >
              Add
            </button>
        
            {/* <textbox className='addTripForm'name="at" ref={register} placeholder="Title" />
            <button type="button" onClick={() => insert(parseInt(at, 0))}>
              insert at
            </button> */}
          </section>
    
          <input type="submit" />
        </form>
      );
    }
    
export default AddTripForm