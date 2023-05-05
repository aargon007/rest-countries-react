import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CountryDetails from '../CountryDetails';

const Home = () => {
    const countries = useLoaderData();
    // console.log(countries);

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10'>
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