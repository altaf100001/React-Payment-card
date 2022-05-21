import React from 'react'

import "../App.css"

export const Card = ( props ) => {
    // console.log(props.form)

    
  return (
      <div>

{
    props.form.map((el)=>(
        <div className={el.name=="Amazon Gift"?"red card": "green card"}>

     <div className='upcard'>
            <p className='date font'>{el.date}</p>
            <img className='img' src={el.logo} alt="" />
        </div>
        
        <button className='btn'>Case Study</button>
        
        <h2 className='pay'>{el.name}</h2>
        <h2 className='pay'>{el.pay}</h2>
        
        <div className='sub'>
        <p className='comp font'>{el.site}</p>
        <p className='arrow font'><i class="fa-solid fa-arrow-right"></i></p>
        </div>
        
         </div>
    ))
}

      </div>
  )


 






}
