import React,{useState} from 'react';
import './Banner.css';
import Button from '@material-ui/core/Button';
import Search from './Search';
import {useHistory} from 'react-router-dom'; 

function Banner() {
    const history = useHistory();
    const [ showSearch, setShowSearch ] = useState(false);

    return (
        <div className="banner">    
            <div className="banner_search">  
            
              <Button onClick={(e)=>setShowSearch(!showSearch)}    className="banner_searchButton" variant="outline">
                    Search Dates
              </Button>
              {showSearch && <Search />}
              
            </div>

            <div className="banner_info">
                <h1>Get out and streach your imagination</h1>
                <h5>Plan a different find of gateway to uncover the hidden gems near you.</h5>
                <Button onClick={()=>history.push('/search')} variant="contained">Explore Nearby</Button>
            </div>
            
        </div>
    )
}

export default Banner
