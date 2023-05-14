import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firbase/Firbase.config';



export const AuthContext = createContext()
const auth = getAuth(app);


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
    });
    return () => {
        return unsubscribe();
    }
}, [])


const logOut = ()=>{
    setLoading(true)
    signOut(auth)
}


 const authInfo = {
  users,
  loading,
  createUser,
  sighinIn,
  logOut
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;