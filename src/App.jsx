import React from 'react';
import {useState } from 'react';
import { Routes,Route, Link } from 'react-router-dom';
import Africa from './components/Navbar/Africa';
import America from './components/Navbar/America';
import Asia from './components/Navbar/Asia';
import Europe from './components/Navbar/Europe';
import Home from './components/Navbar/Home';
import Oceania from './components/Navbar/Oceania';
import SearchByName from './components/Navbar/SearchByName';

const App = () => {
  const [value, setValue] = useState("");
  const [newV, setNewV] = useState("");

  const handleValue = ()=>{
    if(value){
      setNewV(value);
    } else {
      alert("please enter a country name")
      return;
    }
  }

  return (
    <div className=''>
      <nav className='nav'> 
        <Link to="/" className='bg-blue-500 nav-item'>Home</Link>
        <Link to="/asia" className=' bg-gray-500 nav-item'>Asia</Link>
        <Link to="/europe" className=' bg-violet-500 nav-item'>Europe</Link>
        <Link to="/america" className=' bg-green-500 nav-item'>America</Link>
        <Link to="/africa" className=' bg-amber-500 nav-item'>Africa</Link>
        <Link to="/oceania" className=' bg-indigo-500 nav-item'>Oceania</Link>
        <div className='flex'>
          <input type="text" className='text-black p-1 border rounded-none outline-purple-400' onKeyPress={(event) => {
            if (event.key === "Enter") {
              setNewV(value)
            }
          }} onChange={(e)=> setValue(e.target.value)} placeholder='Search by Country name'/>
          <Link to='/search' className='px-5 py-1  bg-purple-500 text-white'>
              <input type='submit' value="Search" onClick={handleValue} className="cursor-pointer"/>
          </Link>
        </div>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/asia' element={<Asia></Asia>}></Route>
        <Route path='/europe' element={<Europe></Europe>}></Route>
        <Route path='/america' element={<America></America>}></Route>
        <Route path='/africa' element={<Africa></Africa>}></Route>
        <Route path='/oceania' element={<Oceania></Oceania>}></Route>
        <Route path='/search' element={<SearchByName inputValue={newV}></SearchByName>} ></Route>
      </Routes>
    </div>
  );
};

export default App;