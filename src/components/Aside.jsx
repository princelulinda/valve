import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <aside className="hidden md:block w-[20%] bg-blueBlack text-white h-full p-4">
      <div className="p-4 text-xl font-bold text-sky-500 text-white bg-primaryBlue rounded-md ">Logo</div>
      <ul className="space-y-2  mt-6 gap-2">
        <div className="border-solid border-b border-gray-700 mx-2 py-2"> 
            <li><Link to="/Home" className="block py-2 px-4  rounded-lg  hover:bg-gray-700 hover:border-r-4 hover:border-sky-500 ">Accueil</Link></li>
            <li><Link to="/inbox" className="block py-2  px-4  rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-sky-500">Boite de réception</Link></li>
        </div>
        
        <div className='border-solid border-b border-gray-700 mx-2 py-2'>
            <li><Link to="/student-clubs" className="block  py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-sky-500">Clubs étudiants</Link></li>
            <li><Link to="/student-council" className="block  rounded-lg py-2 px-4 hover:bg-gray-700 hover:border-r-4 hover:border-sky-500">Conseil des étudiants</Link></li>
        </div>

        <div className='border-solid border-b border-gray-700 mx-2 py-2'>
            <li><Link to="/research-department" className="block py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-sky-500">Recherche scientifique</Link></li>
            <li><Link to="/research-department" className="block py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-sky-500">Assurance Qualité</Link></li>
        </div>

        <div className='border-solid border-b border-gray-700 mx-2 py-2 '>
        <li><Link to="/send-post" className="block py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-sky-500">Publier </Link></li>

          {/* LIGHT AND DARK MODE  */}
        <div className='flex px-4 my-2 rounded-full '>
          <div id='lightMode' className='flex gap-2 px-4 bg-primaryBlue border-l border-t border-b rounded-l-full '>
          <i>#</i>
            <span>Light</span>
          </div>
          <div id='darkMode' className='flex gap-2  px-4  border-r border-t border-b rounded-r-full '>
            <i>#</i>
            <span>Dark</span>
          </div>
        </div>

        {/* LOG OUT  */}

        <li><Link to="/research-department" className="block py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-r-4 hover:border-sky-500">Se deconnecter </Link></li>

        </div>
      </ul>
    </aside>
  );
}

export default NavBar;
