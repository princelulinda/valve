import React from 'react';

import Card from '../components/Card';

function StudentClubs() {
 

  return (
        <div className="student-clubs ">
           
        <section class="bg-primary h-[80vh]  overflow-scroll">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md  lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">CLubs d'Etudiants</h2>
                <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
                  
                    <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div className='bg-white p-4 rounded-lg'>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <img className="rounded-t-lg" src="src\assets\image.png" alt="" />
                            </div>
                            <h3 class="mb-2 text-xl font-bold ">Fongolab</h3>
                            <small>Catégorie : Programmation Informatique</small>
                            <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>

                            <div className='my-4 flex gap-2'>
                                <a href="#" className=' px-4 py-2 bg-secondaryBlueBlack rounded-md text-white'>Voir le site</a>

                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-lg'>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <img className="rounded-t-lg" src="src\assets\image.png" alt="" />
                            </div>
                            <h3 class="mb-2 text-xl font-bold ">CARS</h3>
                            <small>Catégorie : Réseau Informatique</small>
                            <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>

                            <div className='my-4 flex gap-2'>
                                <a href="#" className=' px-4 py-2 bg-secondaryBlueBlack rounded-md text-white'>Voir le site</a>

                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-lg'>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <img className="rounded-t-lg" src="src\assets\image.png" alt="" />
                            </div>
                            <h3 class="mb-2 text-xl font-bold ">CRS</h3>
                            <small>Catégorie : Architecture de Maison</small>
                            <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>

                            <div className='my-4 flex gap-2'>
                                <a href="#" className=' px-4 py-2 bg-secondaryBlueBlack rounded-md text-white'>Voir le site</a>

                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-lg'>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <img className="rounded-t-lg" src="src\assets\image.png" alt="" />
                            </div>
                            <h3 class="mb-2 text-xl font-bold ">GASS</h3>
                            <small>Catégorie : Mathematique de Construction </small>
                            <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>

                            <div className='my-4 flex gap-2'>
                                <a href="#" className=' px-4 py-2 bg-secondaryBlueBlack rounded-md text-white'>Voir le site</a>

                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-lg'>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <img className="rounded-t-lg" src="src\assets\image.png" alt="" />
                            </div>
                            <h3 class="mb-2 text-xl font-bold ">YEV</h3>
                            <small>Catégorie : Entrepreneuriat et Busness</small>
                            <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>

                            <div className='my-4 flex gap-2'>
                                <a href="#" className=' px-4 py-2 bg-secondaryBlueBlack rounded-md text-white'>Voir le site</a>

                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-lg'>
                            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <img className="rounded-t-lg" src="src\assets\image.png" alt="" />
                            </div>
                            <h3 class="mb-2 text-xl font-bold ">AYLF</h3>
                            <small>Catégorie : Leadership</small>
                            <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>

                            <div className='my-4 flex gap-2'>
                                <a href="#" className=' px-4 py-2 bg-secondaryBlueBlack rounded-md text-white'>Voir le site</a>

                            </div>
                        </div>
                    </div>
                </div>
</section>
        
    </div>
  );
}

export default StudentClubs;
