import {React,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { shazamSelector } from '../../config/shazamSelectors';
import { fetchingSongsAsync } from '../../Store/actions/shazam.actions';
import { ShazamResult } from '../ShazamResult/ShazamResult';
import './header.style.css'

const Header = () => {
    const dispatch = useDispatch()
    const songsData = useSelector(shazamSelector)//this is the data we are getting from search

    // Setting the input values into variables using useState hoook
    const [songName, setsongName] = useState('');
    const [limit, setLimit] = useState('');
    const [language,setLanguage] = useState('');
    const getLanguage = (e=> setLanguage(e.target.value));
    const getLimit = (e=> setLimit(e.target.value));
    const getSong = (e=> setsongName(e.target.value));

    // Creating a param object that is passed to the api through function fetchingSongAsync
    const param = {term: songName, locale: language, offset: '0', limit: limit}
    const getResult = ()=>{
        dispatch(fetchingSongsAsync(param))
        setsongName('');
        setLimit('');
        setLanguage('');
    }
    
   
  return (
    <>
    <div className='container'>
        <h1>
            Shazam App
        </h1>
        <div className='searchMenu'>
                <input value={songName} type="text" onChange={getSong} placeholder='Search Song Name..'/>
                <select value={language} onChange={getLanguage} className="form-select" aria-label="Default select example">
                    <option value="" selected>Select Language</option>
                    <option value="English">English</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Saraiki">Saraiki</option>
                    <option value="Persian">Pesian</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Latin">Latin</option>
                </select>
                <select value={limit} onChange={getLimit} className="form-select" aria-label="Default select example">
                    <option value='0' selected>Limit</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                <button onClick={getResult} className='btn btn-primary'>Search</button>
        </div>
    </div>
    <ShazamResult songs= {songsData}/>
    </>
  )
}

export default Header
