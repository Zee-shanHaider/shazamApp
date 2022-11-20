import {Shazam_Types} from '../action.types'
const {Fetch_Shazam_Success,Fetch_Shazam_Failed,Fetch_Shazam_Start} = Shazam_Types

const Initial_State = {
    shazamResult: [],
    isLoading: false,
    error: null
}

export const shazamReducer = (state = Initial_State, action)=>{
    const {type,payload} = action;
    switch(type){
        case Fetch_Shazam_Success:
            return{
                ...state,
                isLoading:false,
                shazamResult: payload
            }
        case Fetch_Shazam_Failed:
            return{
                ...state,
                error: payload,

            }
            case Fetch_Shazam_Start:
                return{
                    ...state,
                    isLoading: true
                }
        default: return state
    } 
}