import {AiOutlineMore, AiFillVideoCamera, AiOutlineUserAdd} from "react-icons/ai"
import Input from "./Input"
import Messages from "./Messages"
export default function Chatbox(){
    return(
        <div className="chatbox">
            <div className="chat_info">
                <span>Bruce Wayne</span>
                <div className="chat_icons">
                    <AiFillVideoCamera/>
                    <AiOutlineUserAdd/>
                    <AiOutlineMore/>
                </div>
                
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}