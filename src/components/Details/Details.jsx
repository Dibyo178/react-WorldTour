import { useState } from 'react';
import './country.css';
import CountryDetail from './../CountryDetail/CountryDetail';

const Details = ({country,handleVisited,handleVisitedFlags}) => {

    const {name,flags,population,area,cca3} = country;
    console.log(country);

    const [visited,setVisited] = useState(false);

    const handleClick = ()=>{

         setVisited(!visited);
    }
  

      const propsViesited = ()=>{

          handleVisited(country);
      }

      const handleFlags = () =>{

        handleVisitedFlags(country);
      }

    return (
        // coditionaly css uses
        <div className={`c_border ${visited ? 'visited' : 'non_visited'}`}> 
            <h3 style={{color:visited ? 'purple':'none'}}>Country Name: {name?.common}</h3>

            <img src={flags?.png} alt="" />

            <p>Popilation: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={propsViesited} className='btn'>Mark as country</button>
              
             <br />
             <br />

             <button onClick={handleFlags} className='btn'>Add Flags</button>
             <br />
             <br />
            <button onClick={handleClick} className='btn'>{visited?'Visited':'Going Vist'}</button>

            {/* {visited && 'I have a visted this country .'} */}
            <hr />

            <CountryDetail country={country} handleVisited={handleVisited} handleVisitedFlags={handleVisitedFlags}  />
        </div>
    );
};

export default Details;