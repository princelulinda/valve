import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../components/DropdownMenu';
import New from '../components/New';

function Home() {
  return (
    <div className="home">
      {/* section des fonctionnalités  */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2 my-2'>
        <div className='bg-gray-100 rounded-md shadow-md  p-4 h-[20vh] flex items-center justify-center'>Students</div>
        <div className='bg-gray-100 rounded-md shadow-md p-4 h-[20vh] flex items-center justify-center'>Hope Admin</div>
        <div className='bg-gray-100 rounded-md shadow-md p-4 h-[20vh] flex items-center justify-center'>Assurance</div>
        <div className='bg-gray-100 rounded-md shadow-md p-4 h-[20vh] flex items-center justify-center'>Salle</div>
      </div>
      
      {/* sections des options d'accueil */}
      {/* <div className="flex gap-2 mt-4 border-b-2 border-gray-300 ">
          <div className='border-r-2 border-gray-200 p-2'><a href="" className='text-blueBlack font-bold border-b-2 border-blueBlack pb-2 '>Nouvelle mise à jours</a></div>
          <div className='border-r-2 border-gray-200 p-2'><a href="">Documentation de la plateforme</a></div>
          <div className='border-r-2 border-gray-200 p-2'><a href="">Info & AIDE sur les potentiels erreurs</a></div>
          
      </div> */}

      

      <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 ">Bienvenue sur notre plateforme</h1>
      
        <DropdownMenu/>
     
      
    </div>
    </div>
  );
}

export default Home;
