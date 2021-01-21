import React, {useState, useEffect} from 'react'
import * as itemAPI from '../../services/item-api'





function ItemsList(props) {
    console.log(props)
  
    const [items, setItems]= useState([])

    useEffect(() => {
        (async function(){
          const items = await itemAPI.getAll();
          setItems(items);
        })();
      }, [])

    return (
        <>
         <h3>items  List</h3>
         
        </>
    );
}

export default ItemsList;