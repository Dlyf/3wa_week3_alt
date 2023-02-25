import { ADD_DRAGON } from '../constants/actions';

// initialisation des states : SOURCE DE VERITE
let stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"],
    count: 0
}
// const { name, force } = action.payload;


let reducerDragon = (state = stateInit, action = {}) => {
    switch (action.type) {
        case ADD_DRAGON:
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
}

export default reducerDragon;