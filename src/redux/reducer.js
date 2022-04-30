import * as types from "./actionsType";

const initialState = {
    cartData: [],
    loading: true
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CARTDATA:
            return {
                ...state,
                cartData: action.payload,
                loading: false
            }
        case types.UPDATE_CARTDATA:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default cartReducers;