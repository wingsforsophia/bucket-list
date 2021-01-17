import React from 'react'
import FileUpload from '../../components/ImageUploader/ImageUpload';
import FollowButton from '../../components/FollowButton/FollowButton'
import './Profile.css'
import Countdown from '../../components/Counter/Countdown'



const Profile = ({user, pictureFile})=> {   
    

    return (
       
        <>
        <div className='profile'>
            <h1 key={user.id} className='profile'>{user.name}'s Bucket List</h1>
            <div className='countdownProfile'>
                <Countdown/>
            </div>
            <div>
            <FileUpload/>
            </div>
            <FollowButton/>
        </div>
       
        </>
    )

}

export default Profile
