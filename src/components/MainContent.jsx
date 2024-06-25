import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './Aside';
import { useNavigation, useParams, useRoutes } from 'react-router-dom';
import Home from '../Screens/Home';
import Inbox from '../Screens/Inbox';
import ResearchDepartment from '../Screens/ResearchDepartment';
import StudentCouncil from '../Screens/StudentCouncil';
import StudentClubs from '../Screens/StudentsClubs';
import SendPost from '../Screens/SendPost';
import Message  from './Message';


function MainContent() {
   const route = useParams()["*"]
   const routers = {
       "Home":<Home/>,
       "inbox":<Inbox/>,
       "research-department":<ResearchDepartment/>,
       "student-council": <StudentCouncil/>,
       "student-clubs":<StudentClubs/>,
       "send-post":<SendPost/>,
       "message":<Message/>
   }
  return (
    <main className="w-[100%] md:w-[80%] flex-1 p-2 px-8 bg-gray-50">
      <SearchBar/>
      <div>
        {routers[route]?routers[route]:"not found"}
      </div>
    </main>
  );
}

export default MainContent;
