import React from 'react'
import './Discussion.css'



function DiscussionForum() {

    let renderCount = 0;

    renderCount++;


    return (
        <div>
           <div className="ibox-content forum-container">

<div className="forum-title">
    <div className="pull-center forum-desc">
        <h2>Travel Forum</h2>
    </div>
    <h3>General Subjects</h3>
</div>

<div className="forum-item active">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-shield"></i>
            </div>
            <a href="/discussion/general" className="forum-item-title">General Discussion</a>
            <div className="forum-sub-title">Ask travelers about the who, what, when, where, and how before you go. Or share your experience with others. </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>
<div className="forum-item">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-bolt"></i>
            </div>
            <a href="discussion/introductions" className="forum-item-title">Introductions</a>
            <div className="forum-sub-title">New to the community? Please stop by, say hi and tell us a bit about yourself. </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>
<div className="forum-item active">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-calendar"></i>
            </div>
            <a href="/discussion/announcements" className="forum-item-title">Announcements</a>
            <div className="forum-sub-title">This forum features announcements from the community staff. If there is a new post in this forum, please check it out. </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>
<div className="forum-item">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-star"></i>
            </div>
            <a href="/discussion/community" className="forum-item-title">Community Discussion/Rules</a>
            <div className="forum-sub-title">This forum is only discussions pertaining to the community itself. </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>
<br/>
<div>
    <h3>Travel</h3>
</div>

<div className="forum-item">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-clock-o"></i>
            </div>
            <a href="/destinations" className="forum-item-title">Explore Destinations </a>
            <div className="forum-sub-title">Have questions or insight about a particular destination? </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>
<div className="forum-item">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-bomb"></i>
            </div>
            <a href="/discussion/outdoors&adventure" className="forum-item-title">Outdoors/Adventure</a>
            <div className="forum-sub-title"> Enjoy being outside and exploring the outdoors? </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>

<div className="forum-item">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-bookmark"></i>
            </div>
            <a href="/discussion/honeymoons&romance" className="forum-item-title">Honeymoon & Romance</a>
            <div className="forum-sub-title">Looking for a romantic getaway or to celebrate your nupitals</div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>
<div className="forum-item">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-clock-o"></i>
            </div>
            <a href="/discussion/solo" className="forum-item-title">Solo Travel </a>
            <div className="forum-sub-title">Traveling alone and need tips, advice, recommendations?</div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>
<div className="forum-item">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-clock-o"></i>
            </div>
            <a href="/discussion/bargin" className="forum-item-title">Bargin Travel </a>
            <div className="forum-sub-title">Wanting budget friendly travel tips?  </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>
<div className="forum-item">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-clock-o"></i>
            </div>
            <a href="/discussion/group" className="forum-item-title">Group Travel </a>
            <div className="forum-sub-title">Traveling with a large group and need ideas? </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        </div>
    </div>
</div>
<div className="forum-item">
    <div className="row">
        <div className="col-md-9">
            <div className="forum-icon">
                <i className="fa fa-ambulance"></i>
            </div>
            <a href="/discussion/familytravel" className="forum-item-title">Family Travel</a>
            <div className="forum-sub-title">Vactioning with family and wanting to incorporate sites that everyone can enjoy?</div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Views</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Topics</small>
            </div>
        </div>
        <div className="col-md-1 forum-info">
            <span className="views-number">
            {renderCount}
            </span>
            <div>
                <small>Posts</small>
            </div>
        
            <br/>
            <div className="pull-right forum-desc">
        <samll>Total posts: 320,800</samll>
    </div>
        </div>
    </div>
</div>

</div> 
        </div>
    )
}

export default DiscussionForum
