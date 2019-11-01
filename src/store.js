import {createStore} from 'redux';

const reducer = (state, action) => {
    if (action.type === "cambiar_seccion") {
        
    }
    return state;
}

export default createStore(reducer, { seccion: 1 });