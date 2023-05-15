import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firbase/Firbase.config';



export const AuthContext = createContext()
const auth = getAuth(app);
const gogoolProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [users,setUsers] = useState(null)
    const [loading,setLoading] = useState(true)



   const createUser = (email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password);
   }

   const sighinIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);

   }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUsers(currentUser);
        console.log('current user', currentUser);
        setLoading(false);
       if(currentUser){
        const logdUser = {
            email: currentUser.email
        }
        fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(logdUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("Access-car-doctors-token", data.token)
                       
                    })

       }else{
        localStorage.removeItem("Access-car-doctors-token")
       }

    });
    return () => {
        return unsubscribe();
    }
}, [])


const siginInGogool = ()=>{
    setLoading(true)
  return   signInWithPopup(auth,gogoolProvider)
}




const logOut = ()=>{
    setLoading(true)
    signOut(auth)
}


 const authInfo = {
  users,
  loading,
  createUser,
  sighinIn,
  siginInGogool ,
  logOut
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;