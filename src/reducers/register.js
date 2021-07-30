import {types} from '../types/types'


export  const registerReducer = (state = {} , action) =>{
    switch (action.type) {
        case types.login:
            return{
                email:action.payload.email,
                pass:action.payload.pass
            }

            case types.logout:
                return {}
    
        default:
            return state
    }
}