import {types} from '../types/types'
import {firebase} from '../firebase/firebaseConfig'

export const loginActions = (email,pass) =>{
    return{
        type:types.login,
        payload:{
            email,
            pass,
        }
    }
}


export const registroEmailYPass = (email,pass) =>{   
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email,pass)
           .then( async({user}) =>{
               console.log(user);

               await user.updateProfile({email})
               if(user){
                dispatch(loginActions(user.email,user.pass)) 
                alert('Registro Exitoso')
            }
           })
            .catch(e =>{
                console.log(e);
                alert('Ya exite Una cuenta Registrada con estos Datos')
            })
       }
}