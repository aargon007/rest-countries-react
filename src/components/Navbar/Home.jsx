import React from 'react';
import CountryDetails from '../CountryDetails';
import { useEffect, useState } from "react";

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    return (
        <div>
            {/* <h1 className='text-center my-5 text-xl font-semibold'>Available Countries : {countries.length}</h1> */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-24 md:px-14 px-5 pb-10'>
                {
                    countries.slice(0,50).map(country => <CountryDetails
                         country={country}
                          key={country.cca3}
                          ></CountryDetails>)
                }
            </div>
        </div>
    );
};

export default Home;