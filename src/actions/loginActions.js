import types from '../types/types'

export const loginActions = () =>{
    return{
        type:types.login,
        payload:{
            id,
            img,
            rating,
        }
    }
}