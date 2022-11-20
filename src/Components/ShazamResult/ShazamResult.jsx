import React from 'react'
import './ShazamResult.style.css'

export const ShazamResult = ({songs}) => {
  return (
    <>   
    
      {songs?
      

   <div className='shazamContainer'>
      
      <h2 style={{'textAlign': 'center'}}>
          Shazam Result
      </h2>
      
        <div className='shazamItems'>
          {
            songs?.map((song,ind)=>{
              return(
                  <div className='shazamItem' key={ind}>
                          <h4 style={{'textAlign': 'center'}}>
                              {song.track.title}
                          </h4>
                          <div className='card__image'>
                            <img src={song.track.images.background} alt="song image" />
                          </div>
                          
                          
                  </div>
         )
        })  
      }
        </div> 
  </div>
      :null}
   </>
)
    
}
