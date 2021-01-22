import React, { useEffect, useState, useRef } from 'react'
import FollowButton from '../../../components/Buttons/FollowButton/FollowButton'
// import '.././Profile.css'


import Calendar from '../../../components/Calendar/Calendar'
import {useForm} from '../../../hooks/useForm'
import { Link, useLocation, useHistory } from 'react-router-dom'


        import * as profileAPI from '../../../services/profile-api'
        
        
        import Countdown from '../../../components/Counter/Countdown'
        import ProfileCard from '../../../components/CardProfile/CardProfile'
        
        
        
function EditProfile({user, handleCreateUserInfo, props}){
    const location =useLocation()
    const history =useHistory()
    const [invalidForm, setValidForm] =useState(false)
    const formRef= useRef()
    const [state, handleChange]= useForm(location.user)


 

        
               
        
         
           
        
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
                               <ProfileCard id={user._id} handleCreateUserInfo={handleCreateUserInfo} user={user}/>
                                
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
          
            export default EditProfile