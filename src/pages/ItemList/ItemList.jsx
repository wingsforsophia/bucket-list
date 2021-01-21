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
              
              <div >
                  {/* {items.map(item =>
                  <VanillaTripShowCard 
                    key={item._id}
                    item={item}
                    user={props.user}
                    />
                  )} */}
              </div>
              <h1>Items List</h1>
            </>
        
             );
}

export default ItemsList;