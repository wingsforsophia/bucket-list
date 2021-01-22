import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const ItemsShowList = ({ user, item }) => {
    return ( 
    <> 
    <ListGroup>
  <ListGroup.Item className="mb-1 text-muted"> {item.time} {item.location} "{item.notes}"</ListGroup.Item>
  
</ListGroup>
    </>
     );
}
 
export default ItemsShowList;