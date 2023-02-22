import Sidebar from "../Components/Sidebar";
import Chatbox from "../Components/Chatbox";
export default function Home(){
    return(
       <div className="home">
        <div className="home_container">
            <Sidebar/>
            <Chatbox/>
        </div>
       </div>
    )
}