import React, {useEffect, useRef, useState} from "react";
import './Countdown.css'
import Confetti from 'react-dom-confetti';


const config={
  angle: "180",
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors:
   [
     '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722'
    ]
};


const Countdown =()=> {
  const[timerDays, setTimerDays]= useState('00')
  const[timerHours, setTimerHours]=useState('00')
  const[timerMinutes, setTimerMinutes]=useState('00')
  const[timerSeconds, setTimerSeconds]=useState('00')
  const[showConfetti, setShowConfetti]=useState(false)

  let interval= useRef()

 

  const startTimer =()=>{
    const countdownDate = new Date('January 25, 2021 12:00:00').getTime()


  const config={
    angle: "360",
    spread: 360,
    startVelocity: 40,
    elementCount: 400,
    dragFriction: 0.25,
    duration: 7000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors:
   [
     '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722'
    ]
};

    interval= setInterval(()=>{
      const now = new Date().getTime()
      const trip =countdownDate - now

      const days = Math.floor(trip /(1000 * 60 * 60 *24))
      const hours = Math.floor((trip %(1000* 60* 60* 24))/ (1000 * 60 * 60))
      const minutes = Math.floor((trip %(1000 * 60 * 60))/ (1000 * 60))
      const seconds = Math.floor((trip %(1000 * 60 ))/ 1000)

      if (trip < 0){
        clearInterval(interval.current); setShowConfetti(config)
      } else{
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
       
      }
    }, 1000)
  }

 
  

  useEffect(()=>{
    startTimer()
    return()=>{ 
      clearInterval(interval.current)
    }
  })

    return (
      <div className='countdown'>
       <section className='timer-container'>
         <section className='timer'>
         <section>
              <h2 className='countdown'>Countdown to trip.location</h2>
          </section>
           <div className='timeCounter'>
             <section className='time'>
               <p className='time'>{timerDays}</p>
               <p><h5 className='countdown'>Days</h5 ></p>
             </section>
             <section className='hours'>
               <p className='time'>{timerHours}</p>
               <p><h5 className='countdown'>Hours</h5 ></p>
             </section>
             <section className='countdown'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
              </svg>
            </section> 
             <section className='time'>
               <p className='time'>{timerMinutes}</p>
               <p><h5 className='countdown'>Minutes</h5 ></p>
             </section>
             <section className='hours'>
               <p className='time'>{timerSeconds}</p>
               <p><h5 className='countdown'>Seconds</h5 ></p>
             </section>
           </div>
           
        <Confetti active={showConfetti} config={config} />
    
         </section>
       </section>
      </div>
    );

  }


export default Countdown