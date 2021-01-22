import React, {useState, useEffect} from 'react'
import * as itemAPI from '../../services/item-api'
import ItemsShowList from '../../components/ItemShowList/ItemShowList'
function ItemList(props) {
  const [items, setItems]= useState([])
  useEffect(() => {
    (async function(){
      const allItems = await itemAPI.getAll( props.location.state.trip._id );
      setItems(allItems);
    })();
  }, [])
  return ( 
    <> 
      {items.itinerary && items.itinerary.length && items.itinerary.map(item =>
        <ItemsShowList 
          key={item._id}
          item={item}
          user={props.user}
        />
      )} 
    </>
  );
}
export default ItemList;