import React, { useState } from 'react'


    Const Carousel  = () => {
        const [message, setmessage] = useState('');
        
    const handelCommit = ()=> {
        setmessage('2e813de')
    };
    const handelAnalytics = () =>{
        setmessage('32 online now ')
    };
    const handelUpgrade = () =>{
        setmessage('2 days left in your trail')
    }
    
  return (
    <div className='carousel-container'>
      <div className='carousel-items'>

      </div>
      
      <div className='Carosel-action'>
          <button onClick={handelCommit} >Commit</button>
          <button onClick={handelAnalytics} >Analytics</button>
          <button onClick={handelUpgrade} >Upgrade</button>
      </div>
      <div className='carousel-message'>
          <h2>{message}</h2>
      </div>
    </div>
  )

    }
export default Carousel;
