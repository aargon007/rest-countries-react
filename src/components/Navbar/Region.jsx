import React from 'react';
import CountryDetails from '../CountryDetails';
import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';

const Region = () => {
    const countries = useLoaderData();

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10'>
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