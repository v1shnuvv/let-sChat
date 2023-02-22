import{CgProfile} from "react-icons/cg"
export default function Login(){
    return(
        <div className="form_container">
            <div className="form_wrapper">
                <span className="logo">Let's Chat</span>
                <span className="title">Login</span>
                <form>
               
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                
                <button>Sign In</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>

        </div>
    )
}