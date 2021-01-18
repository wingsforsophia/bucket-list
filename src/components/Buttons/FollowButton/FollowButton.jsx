import React, {useReducer} from 'react'


function FollowButton(){
    const [follow, toggle]=useReducer(
        follow => !follow,
        true
    )

    return (
        <>
    
        <button
          type="checkbox"
          value= {follow}
          onClick={toggle}
          >
          {follow ? "Follow" :"Unfollow"}
          </button>
        </>
    )

}
export default FollowButton