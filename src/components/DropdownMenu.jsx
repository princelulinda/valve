// src/components/DropdownMenu.js
import React, { useState } from 'react';
import New from './New';
import Documentation from './Documentation';
import InfoErrors from './InfoComponent';

const DropdownMenu = () => {
  const [activeSection, setActiveSection] = useState('news');

  return (
    <div>
      <div className="flex gap-2 mt-4 border-b-2 border-gray-300">
        <div className='border-r-2 border-gray-200 p-2'>
            <button onClick={() => setActiveSection('news')} className='text-blueBlack font-bold  border-blueBlack '>Nouvelles actualités</button>
        </div>

        <div className='border-r-2 border-gray-200 p-2'>
            <button onClick={() => setActiveSection('documentation')}>Documentation de la plateforme</button>
        </div>

        <div className='border-r-2 border-gray-200 p-2'>
            <button onClick={() => setActiveSection('errors')}>Infos & aide sur les potentiels erreurs</button>
        </div>
        
      </div>
      <div className="content overflow-scroll scrollbar-thin h-[45vh]">
        {activeSection === 'news' && <New />}
        {activeSection === 'documentation' && <Documentation />}
        {activeSection === 'errors' && <InfoErrors />}
      </div>
    </div>
  );
};

export default DropdownMenu;
