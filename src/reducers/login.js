import types from '../types/types'

const initialState = {
    id:"",
    img:"",
    rating:"",
}

const login = (state = initialState, action) => {
   switch (action.type) {
       case types.login:
           
           return {
               ...state,
               id:action.payload.id,
               img:action.payload.img,
               rating:action.payload.ranting
           }
   
       default:
           return state
           
   }
}

export default login;
