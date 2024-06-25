import React from "react";
function Message (){
    return(
            
       <div>
        {/* container Section  */}
         <div className="col-span-5 bg-gray-200 flex justify-center p-2 px-6 rounded-lg">
            <div className="p-4 w-1/2 bg-white rounded-lg overflow-scroll h-[80vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200">
                {/* En tete du message  */}
                <div className="bg-gray-100 flex justify-between items-center p-2 rounded-md">
                    <i>#</i>
                    <ul className="flex gap-4  items-center justify-center">
                        <li><i>#</i></li>
                        <li><i>#</i></li>
                        <li><i>#</i></li>
                    </ul>

                    <div className="pagination">
                            <i className="">#</i>
                            <i className="">#</i>
                    </div>

                </div>
                {/* Expediteur  */}
                <div className="mt-2 0 py-2 flex justify-between items-center ">
                        <h1 className="bg-gray-100 font-bold text-3xl p-2"><i >#</i> Université</h1>
                        <p className="bg-gray-100 p-2"><i>#</i> 1er Mai 2024 - 12h33'</p>
                </div>
                 {/* objet  */}
                <h3 className="font-medium p-2 bg-gray-100"> <span class="italic underline">Objet</span> : <span class="">Début de stage </span></h3>
                {/* content  */}
                    <div className="mt-4">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore reprehenderit itaque atque sunt ut molestias fuga, quia illum voluptas, commodi neque, optio est culpa sed accusantium odit ab modi.</p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nesciunt voluptate tenetur sequi dolor deserunt porro unde culpa sit maiores, earum, quidem eos delectus quos!</p>

                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus iusto et perspiciatis ut sint rerum obcaecati, praesentium dolor eum saepe. Sunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda iusto debitis libero unde illo ipsam quasi consequatur necessitatibus! Doloremque ducimus enim rerum a quo, porro odio cum, facilis inventore nisi magni assumenda sunt et explicabo ullam asperiores commodi animi? Incidunt necessitatibus dolorem voluptatibus distinctio voluptatum, ratione maiores. Similique, ullam odit! aliquid veniam facilis sed accusamus, in odio unde.</p>
                    </div>

                {/* annexe  */}
                <p>Annexe :</p>
                    <div className="flex justify-center items-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h1 className="text-2xl font-bold mb-4">Télécharger le fichier PDF</h1>
                            <div id="filePreview" className="w-full h-64 mb-4"></div>
                            <button  className="bg-blue-500 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Télécharger
                            </button>
                        </div>
                    </div>
            </div>
         </div>
       </div>
    )
}

export default Message;