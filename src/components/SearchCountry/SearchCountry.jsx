import React, { useState } from 'react';
import CountryDetails from '../CountryDetails';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const SearchCountry = () => {
    const searchCountries = useLoaderData();
    console.log(searchCountries);
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8  pb-10'>
                    {
                        searchCountries && searchCountries.map(country => <CountryDetails
                            country={country}
                            key={country.cca3}
                            ></CountryDetails>)
                    }
            </div>
        </div>
    );
};

export default SearchCountry;