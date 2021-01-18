import React from 'react'

const Favorite =({user}) =>{
    
    return (
        <>
        <div>
            <h1 key={user.id}>{user.name}'s Bucket List Favorites</h1>
        </div>
        </>
    )
}

export default Favorite
