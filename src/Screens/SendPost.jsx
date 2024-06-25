
import React from 'react';

function  SendPost (){
  const handleFileChange = (event) => {
    const files = event.target.files;
    // console.log('Files selected:', files);
  };

  return (
    <div>

        {/* Filtrer la publication  */}
                
        <form class="max-w-sm my-4">
        <span class="block mb-2 text-sm font-medium text-gray-900 ">Spécifier votre publication </span>
        
        <div className='flex gap-4'>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option selected>Choisir un département </option>
            <option value="US">Tous les départements</option>
            <option value="CA">Sciences informatiques</option>
            <option value="FR">Genie et gestion de télécommunication</option>
            <option value="DE">Finance et Banque</option>
            <option value="DE">Medecine et soin de santé</option>
        </select>

        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option selected>Choisir une Promotion </option>
            <option value="US">Toutes les promotions </option>
            <option value="CA">2022</option>
            <option value="FR">2023</option>
            <option value="DE">2024</option>
        </select>
        </div>
        </form>


        {/* Titre du message  */}
        <div class="mb-6">
            <label htmlForfor="default-input" className="block mb-2 text-sm font-medium text-gray-900 ">Nom de l'expéditeur :</label>
            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></input>

            <label htmlForfor="default-input" className="block mb-2 text-sm font-medium text-gray-900 ">titre ou objet du message :</label>
            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></input>
        </div>

        {/* Description  */}
 
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Votre message :</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>


        {/* Fichiers annexés  */}
        <div className='my-2'>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Uploader un ou plusieurs fichiers joints à cette publication :</label>
        <input 
            className="block w-full text-sm px-2 py-4 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 outline-none "
            id="multiple_files" 
            type="file" 
            multiple
        
        />
        </div>

        <div className='my-2'>
          <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">Publier</button>

        </div>
    </div>
  );
};

export default SendPost;
