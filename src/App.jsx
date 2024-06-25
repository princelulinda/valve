import React, { useState } from 'react';

import RegisterScreen from './Screens/Auth/SignUp/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '.';
import GetDataFunction from './fetchData/FetchDataFunction';



function App() {
  const requestOptions = {

    headers: { 'Content-Type': 'application/json',
    "Access-Control-Allow-Origin":""

    },

};
 GetDataFunction("/info", requestOptions)
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<RegisterScreen/>} />
        <Route path="/*" element={<Index/>} />

    </Routes>
</BrowserRouter>
  );
}

export default App;


// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa'; // Importez l'icône souhaitée
// import Home from './components/Home';
// import SearchBar from './components/SearchBar';
// import './index.css';

// function App() {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       {isSidebarOpen && <SearchBar />}
//       <div className="flex-1 p-4">
//         <div className="flex justify-between items-center mb-4">
//           <button 
//             className="text-2xl"
//             onClick={toggleSidebar}
//           >
//             <FaBars /> {/* Utilisation de l'icône */}
//           </button>
//           <input 
//             type="text" 
//             placeholder="Rechercher..." 
//             className="flex-1 p-2 border border-gray-300 rounded ml-4"
//           />
//         </div>
//         <Home />
//       </div>
//       <div className="w-64 p-4 bg-gray-100">
//         <h2>Articles</h2>
//         {/* Contenu des articles */}
//       </div>
//     </div>
//   );
// }

// export default App;
