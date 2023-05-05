import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Search = () => {
    const navigate = useNavigate();
 
    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // console.log(name);
        if(name === ""){
            toast.error("Please enter a country name", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        navigate(`/country/${name}`)
    }

    return (
        <div>
            <div className='flex'>
                <form onSubmit={handleSearch}>
                    <input type="text" name='name' id='name' className='text-black p-1 border rounded-none outline-purple-400'  placeholder='Search by Country name'/>
                    <input type='submit' value="Search"  className="cursor-pointer bg-purple-400 p-1 text-white"/>
                </form>
            </div>
        </div>
    );
};

export default Search;