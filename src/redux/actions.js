import axios from 'axios';
import * as types from './actionsType';

const getCartData = (cartData) => ({
    type: types.GET_CARTDATA,
    payload: cartData
});

const cartDataUpdated = () => ({
    type: types.UPDATE_CARTDATA
});

export const loadCartData = (vazio, json) => {
    return function (dispatch) {
        var jsonUsage = json == 1 ? 'acima-10-reais' : 'abaixo-10-reais';

        if (!vazio) {
            axios.get(`${process.env.REACT_APP_API}/${jsonUsage}.json`).then((resp) => {
                console.log("resp", resp);
                dispatch(getCartData(resp.data));
            }).catch(error => console.log(error));
        } else {
            dispatch(getCartData([]));
        }
    }
}

export const updateCartData = () => {
    return function (dispatch) {
        dispatch(cartDataUpdated());
        dispatch(loadCartData(1));
    }
};