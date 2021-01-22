import React, { useState, useEffect }  from 'react'
import * as profileAPI from '../../services/profile-api'
import FollowButton from '../../components/Buttons/FollowButton/FollowButton'
import './Profile.css'
import Countdown from '../../components/Counter/Countdown'
import ProfileCard from '../../components/CardProfile/ViewCard/ProfileCard'
import Calendar from '../../components/Calendar/Calendar'
import { render } from 'react-dom'
import { useForm } from 'react-hook-form'



function Profile( {user, formData}, props){
    const [profile, setProfile]=([])
    const [state, handleChange] = useForm({
            user: '',
            file: '',
            imgUrl: '',
            name:'',
            bio: '',
            status: '',
            dream: '',
            favorite: '',
    })

    useEffect(()=>{
        (async function (){
            const profile = await profileAPI.getUserInfo()
            setProfile(profile)
        })()
    }, [])

    
   
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
                       <ProfileCard  profile={props.profile} user={user}/>
                        
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