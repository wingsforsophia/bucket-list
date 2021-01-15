import React from 'react'
import './TripCards.css'
import TinderCard from 'react-tinder-card'


function TripCards() {
    const [destinations, setState]= React.useState([
       {
            name:'Florida Keys',
            url: 'https://i.imgur.com/ZxvoARS.png',
            id: 1,
       },{
            name: 'Burma',
            url: 'https://i.imgur.com/N340ZCM.png',
            id : 2,
       },{ 
            name: 'Italy',
            url : 'https://i.imgur.com/PuZbjE2.png',
            id: 3,
       },{
            name: 'Chicago',
            url: 'https://i.imgur.com/diCpRSQ.png',
            id : 4,
       },{
            name: 'Poland',
            url: 'https://i.imgur.com/rd94g5B.png',
            id :5,
       },{ 
            name: 'Toronto',
            url: 'https://i.imgur.com/OOADtCw.png',
            id: 6,
       },{ 
            name:'Paris',
            url: 'https://i.imgur.com/rveBkkd.png',
            id: 7,
       },{
            name: "Venice",
            url: 'https://i.imgur.com/wtxMOVA.png',
            id: 8,
        
        },{
            name: "Rio de Janeiro",
            url: 'https://i.imgur.com/HQaHQ2l.png',
            id: 9,
        
        },{
            name: "Barcelona City",
            url: 'https://i.imgur.com/k0sF18D.png',
            id: 10,
        
        },{
            name: "Hong Kong",
            url: 'https://i.imgur.com/tOaWpF6.png',
            id: 11,
        
        },{
            name: "Las Vegas",
            url: 'https://i.imgur.com/maT2aDg.png',
            id: 12,
        
        },{
            name: "Greece",
            url: 'https://i.imgur.com/IEfs5hn.png',
            id: 13,
        
        },{
            name: "New York City",
            url: 'https://i.imgur.com/jxl98Ln.png',
            id: 14,
        
        },
    ])

    const swiped =(direction, nameToDelete) =>{
        console.log(`removing: ${nameToDelete}`)
    }

    const outOfFrame = (name)=>{
        console.log(`${name} left the screen!`)
    }
    
    return (
        <div  className='tripCard'>
         <div className='tripCards_cardContainer'> 
            {destinations.map((place)=>(
                <TinderCard 
                className= 'swipe'
                key ={place.name}
                preventSwipe= {['up','down']}
                onSwipe={(dir)=>swiped(dir, place.name)}
                onCardLeftScreen={()=> outOfFrame(place.name)}>
                <div 
                style= {{backgroundImage: `url(${place.url})`}}
                className='card'>
                    <h3>{place.name}</h3>
                </div>
            
                </TinderCard> 
            ))}
            </div> 
        </div>
    )
}

export default TripCards

