import React from 'react'
import './FooterButtons.css'

import ForumIcon from '@material-ui/icons/Forum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite'
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from "@material-ui/core/IconButton"



function FooterButtons() {
    return (
        <div className='swipeButtons'>
            <a href='/profile'>
                <IconButton className='swipeButtons_left'>
                    <AccountCircleIcon fontSize='large'/>
                </IconButton>
            </a>
            <a href='/discussion'>
                <IconButton className='swipeButtons_star'>
                    <ForumIcon fontSize='large'/>
                </IconButton>
            </a>
            <a href='/favorites'>
            <IconButton className='swipeButtons_right'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            </a>
            <a href='/messenger'>
            <IconButton className='swipeButtons_lightning'>
                <ChatIcon fontSize='large'/>
            </IconButton>
             </a>
        </div>
    )
}

export default FooterButtons
