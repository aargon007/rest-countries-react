import React from 'react';
import CountryDetails from '../CountryDetails';
import { useEffect, useState } from "react";

const Region = (props) => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/${props.value}`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-14 lg:px-24 px-5 pb-10'>
            {
                countries.map(country => <CountryDetails
                        country={country}
                        key={country.cca3}
                        ></CountryDetails>)
            }
        </div>
    );
};

export default Region;