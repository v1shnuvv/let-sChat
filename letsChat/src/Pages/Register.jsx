import{CgProfile} from "react-icons/cg"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage, db} from "../Firebase"
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { collection, addDoc } from "firebase/firestore"; 



export default function Register(){


    const [err, setErr]=useState(false)
    const handleSubmit = async(e) =>{
        e.preventDefault()
        // console.log(e.target[0].value)
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        console.log(email+ password); 
        try {
          const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        
         
// const auth = auth();
try{
    // const res = await createUserWithEmailAndPassword(auth, email, password)

   
    // const storageRef = ref(storage, displayName);
    
    // const uploadTask = uploadBytesResumable(storageRef, file);
    
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    // uploadTask.on(
    //   (error) => {
    //     setErr(true)
    //   }, 
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
    //       await updateProfile(res.user,{
    //         displayName,
    //         photoURL:downloadURL
    //       });
    //       await setDoc(doc(db, "users", res.user.uid),{
    //         uid: res.user.uid,
    //         displayName,
    //         email,
    //         photoURL: downloadURL,
    //     })
    //     });
    //   }
    // );
    
}catch(err){
setErr(true)
} 
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

    }
    return(
        <div className="form_container">
            <div className="form_wrapper">
                <span className="logo">Let's Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Display Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input style={{display: "none"}} type="file" id="file"/>
                <label htmlFor="file"><CgProfile/>Add avatar</label>
                <button>Sign Up</button>
                {err && <span>Something went wrong!</span>}
                </form>
                <p>Already have an account? Login</p>
            </div>

        </div>
    )
}