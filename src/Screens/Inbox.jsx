import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Data = [{
  title:"New breakthrough in AI technology",
  categorie:"Université",
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image:"https://via.placeholder.com/50/0097a7/808080?Text=Technology",
  datePublication : "6/09/2024",

  
  },
  {
    title:"Health benefits of a balanced diet",
    categorie:"conseil",
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:" https://via.placeholder.com/50/0097a7/808080?Text=Technology",
    datePublication : "6/09/2024",
    
    },

]

function Inbox() {



  return (
    <div className="inbox ">
      <h1 className="text-2xl font-bold">Boîte de réception</h1>
      <div className=' flex gap-[20px] my-2'>
         <button className='bg-secondaryBlueBlack px-4 py-2 rounded-full text-white'>Tous</button>
         <button className='bg-gray-100 px-4 py-2 rounded-full'>Université</button>
         <button className='bg-gray-100 px-4 py-2 rounded-full'> conseil des Etudiants</button>
         <button className='bg-gray-100 px-4 py-2 rounded-full'>Recherche Scientifique</button>
      </div>
      <ul className='overflow-scroll scrollbar-thin h-[75vh]'>
        {Data.map(item => {
          return(
            <li  className="">
              <Link to="/message" className='bg-gray-50 p-2 m-2 flex  gap-2'>
              <div className='w-[10%] '>
              <img src={item.image}  className="w-18 h-18 rounded-full  object-cover mt-2" />
            </div>
             <div className='w-[75%]'>
                <h2 className="text-xl">{item.title}</h2>
                <p className='font-light'>{item.content}</p>
             </div>
            
            <small className='w-[15%]'>{item.datePublication}</small>
            </Link>
            
          </li>
          )
        }
          
        )}
      </ul>
    </div>

  );
}

export default Inbox;
