import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { FirebaseAuth } from "./firebaseConfig";




export const registerUserWithEmailAndPassword = async({email, password, displayName}) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
       
        await updateProfile( FirebaseAuth.currentUser, { displayName } )
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    
    } catch (error) {
        
        return {ok: false, errorMessage: error.message}
    }
}


export const loginWithEmailPassword = async({email,password}) => {

    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, displayName} = resp.user;

        return {
            ok: true,
            uid, email, displayName
        }

    } catch (error) {

            return {ok: false, errorMessage: error.message}

    }
    // singInWithEmailAndPassword
}



export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
