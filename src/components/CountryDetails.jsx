import React from 'react';

const CountryDetails = ({country}) => {
    const {flags, name, capital,area, population, continents,currencies, languages, timezones, borders} = country;
    return (
        <div className='border-2 p-5  font-medium space-y-4 rounded-md bg-blue-100 shadow-lg'>
            <img src={flags.png} alt="" className='mx-auto h-48 w-10/12' />
            <h2 className='text-center text-red-500 text-xl'>{name.common}</h2>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area} km<sup>2</sup> </h3>
            <h3>Population: {population}</h3>
            <h3>Currency : {currencies ? Object.values(currencies)[0].name : ""}</h3>
            <h3>Language : {languages ? Object.values(languages).join(", ") : ""}</h3>
            <h3>Time Zone: {timezones[0]}</h3>
            <h3>Continent: {continents[0]}</h3>
        </div>
    );
};

export default CountryDetails;