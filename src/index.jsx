import NavBar from "./components/Aside";
import MainContent from "./components/MainContent";

export default function Index(){
    return(
        <div className="flex h-screen">
        <NavBar/>
        <div className="flex flex-1 ">
          <MainContent/>

        </div>
        </div>
    )
}