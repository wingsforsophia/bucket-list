import React, {useState, useEffect} from 'react'
import * as itemAPI from '../../services/item-api'
import ItemsShowList from '../../components/ItemShowList/ItemShowList'





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
                  {items.map(item =>
                  <ItemsShowList 
                    key={item._id}
                    item={item}
                    user={props.user}
                    />
                  )}
              </div>
            
            </>
        
             );
}

export default ItemsList;