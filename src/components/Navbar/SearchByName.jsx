import React from 'react';
import { useState, useEffect } from 'react';
import CountryDetails from '../CountryDetails';
const SearchByName = ({inputValue}) => {

    const [country, setCountry] = useState([]);
    useEffect( ()=>{
        fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[inputValue])
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-14 lg:px-24 px-5 pb-10'>
                {
                    inputValue && country.map(country => <CountryDetails
                         country={country}
                          key={country.cca3}
                          ></CountryDetails>)
                }
            </div>
        </div>
    );
};

export default SearchByName;