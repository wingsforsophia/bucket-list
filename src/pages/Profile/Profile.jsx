import React from 'react'
import FollowButton from '../../components/FollowButton/FollowButton'
import './Profile.css'
import Countdown from '../../components/Counter/Countdown'
import CardProfile from '../../components/ImageUploader/CardProfile'



const Profile = ({user, pictureFile})=> {   
    
    
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
                <div>
                    
                 
                 
                </div>
                
                <div className='countdownProfile'>
                 <Countdown/>
                </div>
            </div>
        </div>
       
        </>
    )

}


export default Profile
