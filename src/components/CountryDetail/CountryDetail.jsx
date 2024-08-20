
import './CountryDetail.css';
import CountryData from './../CountryData/CountryData';
const CountryDetail = ({country,handleVisited,handleVisitedFlags}) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />

         <CountryData country={country} handleVisited={handleVisited} handleVisitedFlags={handleVisitedFlags}  />
        </div>
    );
};

export default CountryDetail;