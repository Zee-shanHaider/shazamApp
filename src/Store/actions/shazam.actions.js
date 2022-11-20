import {Shazam_Types} from '../action.types'
import axios from 'axios'
const {Fetch_Shazam_Success,Fetch_Shazam_Failed,Fetch_Shazam_Start} = Shazam_Types;

const fetchShazamSuccess = (songs)=> ({
    type: Fetch_Shazam_Success, 
    payload: songs
})

const fetchShazamFailed = (error)=> ({
    type: Fetch_Shazam_Failed,
    payload: error
})

export const fetchingSongsAsync = (params) => async (dispatch)=>{
    try{
        
        var options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',params,
            headers: {
              'x-rapidapi-host': 'shazam.p.rapidapi.com',
              'x-rapidapi-key': '6a230a336cmsh8590d7ba60fbbfep1ef06bjsn0e12cbfdb625'
            }
          };
          const songs = await axios.get('https://shazam.p.rapidapi.com/search',options)
          dispatch(fetchShazamSuccess(songs))
    }
    catch(error){
        dispatch(fetchShazamFailed(error))
    }
      
}