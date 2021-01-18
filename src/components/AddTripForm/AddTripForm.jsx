import React, {useState} from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";


function AddTripForm() {
    
    let renderCount = 0;
    
    
      const [data, setData] = useState(['id']);
      const { register, getValues, watch, handleSubmit, control } = useForm();
      const at = watch("at", 2);
      const prepend = () => {
        setData([{ id: '1' }, ...data]);
      };
    
      const append = () => {
        setData([...data, { id: '1' }]);
      };
    
      const remove = index => {
        setData([...data.slice(0, index), ...data.slice(index + 1)]);
      };
    
      const update = index => {
        const data = getValues();
        data[index].id = data[`field${index}`];
        setData([...data]);
      };
    
      const insert = index => {
        setData([
          ...data.slice(0, index),
          { result: "", id:'1' },
          ...data.slice(index)
        ]);
      };
    
      const onSubmit = data => console.log(data);
    
      renderCount++;
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className='addTripForm'>
          <p className='addTripForm'>To add a trip or destination, allowing you to add,  delete, edit prior to submitting</p>
          <span className="counter">Render Count: {renderCount}</span>
          <ul className='addTripForm'>
            {data.map((item, index) => (
              <li className='addTripForm' key={`wtf${index}`}>
                <Controller
                  key={`wtf${index}`}
                  as={<input />}
                  placeholder="content"
                  name={`field${item.id}`}
                  control={control}
                  className='addTripFrom'
                />
                <button onClick={() => remove(index)}>Delete</button>
                <button onClick={() => update(index)}>Edit</button>
              </li>
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
            <button type="button" onClick={() => prepend()}>
              prepend
            </button>
            <input className='addTripForm'name="at" ref={register} placeholder="Insert index" />
            <button type="button" onClick={() => insert(parseInt(at, 10))}>
              insert at
            </button>
          </section>
    
          <input type="submit" />
        </form>
      );
    }
    
export default AddTripForm