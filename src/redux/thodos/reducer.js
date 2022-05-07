import {  ADD_TODo } from "./action";

const init = {  todos : [] }

export const todosReducer = ( store = init , {type , payload} ) =>
{
    switch(type) {
        
        case ADD_TODo:
            return    { ...store, todos : payload }
        default :
            return store
    }
}