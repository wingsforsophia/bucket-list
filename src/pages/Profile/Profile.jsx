import React from 'react'
import FollowButton from '../../components/Buttons/FollowButton/FollowButton'
import './Profile.css'
import Countdown from '../../components/Counter/Countdown'
import CardProfile from '../../components/CardProfile/CardProfile'
import Calendar from '../../components/Calendar/Calendar'



const Profile = ({user})=> {   
    
    
    return (
       
        <>
        <div className='profile'>
            <h1 key={user.id} className='profile'>{user.name}'s Bucket List</h1>
         
            
            <div className='userProfile'> 
                <div className= 'profilePicture'>  
                    <div className='follow'>
                         <FollowButton/>
                    </div>
                    <h2 className='userProfile'>{user.name}</h2>
                    <div className='profilePic'>
                       <CardProfile/>
                        
                    </div>
                </div>
                
                <div className='countdownProfile'>
                 <Countdown/>
                 <br/>
                 <Calendar/>

                </div>
            </div>
        </div>
       
        </>
    )

}


export default Profile
