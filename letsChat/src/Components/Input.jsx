import {RiAttachmentFill} from "react-icons/ri"
export default function Input(){
    return(<div className="input">
        <input type="text" placeholder="Write something"/>
        <div className="send">

            <input type="file" style={{display: "none"}} id="file"/>
            <label htmlFor="file"><RiAttachmentFill/></label>
             <button>send</button>
        </div>

    </div>)
}