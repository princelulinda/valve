import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ toggleNavBar, isNavBarOpen }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between  gap-4">
         
          <div className='w-[75%] flex items-center justify-center gap-2'>
              <button onClick={toggleNavBar} className="bg-gray-800 text-3xl px-2 text-white">&#9776;</button>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Rechercher..."
                className="flex-grow border border-gray-300 p-2 rounded-l outline-none "
              />
              <button className="bg-gray-800 text-2xl text-white p-2 rounded-r">
                <FaSearch />
              </button>
          </div>

      <div  className='w-[25%] flex gap-2'>
        <div  className="bg-gray-800 text-3xl px-2 text-white rounded-lg flex items-center justify-center w-[50px] flex items-center justify-center h-[50px]"></div>
        <div  className="bg-gray-800 text-3xl px-2 text-white rounded-lg flex items-center justify-center w-[50px] flex items-center justify-center h-[50px]"></div>
     </div>
     
    </div>
      
    
    </div>
    
  );
}

export default SearchBar;
