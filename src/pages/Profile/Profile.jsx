import React from 'react'
import FileUpload from '../../components/ImageUploader/ImageUpload';
import FollowButton from '../../components/FollowButton/FollowButton'
import './Profile.css'



const Profile = ({user, pictureFile})=> {   
    

    return (
       
        <>
        <div>
        
       
    
        <h1 key={user.id}>{user.name}'s Bucket List</h1>

        <FileUpload/>
        <FollowButton/>
        </div>
       
        </>
    )

}

export default Profile
