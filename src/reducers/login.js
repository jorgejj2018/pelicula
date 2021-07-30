import {types} from '../types/types'

const initialState = {
    email:null,
    pass:null,
}
const login = (state = initialState, action) => {
   switch (action.type) {
       case types.login:
           return {
                ...state,
                email:action.payload.email,
                pass: action.payload.pass
           }

        case types.logout:
            return {}
   
       default:
           return state
           
   }
}

export default login;


