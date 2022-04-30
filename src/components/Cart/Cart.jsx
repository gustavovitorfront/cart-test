import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCartData, updateCartData } from '../../redux/actions';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CartDetails from './CartDetails';
import Totalizers from '../Totalizers/Totalizers';

const Cart = (props) => {

    const MySwal = withReactContent(Swal)
    let dispatch = useDispatch();
    const { cartData } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadCartData(0, props.json));
    }, [dispatch, props.json]);

    const handleFinishCart = async () => {
        if (cartData.length === 0) {
            return await Swal.fire({
                icon: 'error',
                title: 'Alerta',
                text: 'Não há produtos no carrinho para finalizar a compra.'
            })
        }

        await MySwal.fire({
            title: <strong>Obrigado(a) pela compra!</strong>,
            html: <i>As informações dos próximos passos serão encaminhadas por e-mail!</i>,
            icon: 'success'
        }).then(function () {
            dispatch(updateCartData());
        });
    }

    return (
        <div className='cart'>
            <div className="cartHeader">
                {props.title}
            </div>

            <div className="cartBody">
                {cartData.length === 0 ? (
                    <div className="alertWithoutItems">
                        Não há produtos no carrinho.
                    </div>
                ) : <CartDetails cartData={cartData} />}

                <Totalizers totalizerData={cartData.totalizers} />
            </div>

            <div className="cartFooter">
                <button
                    title='Deseja finalizar a compra?'
                    className='btnFinish'
                    onClick={handleFinishCart}
                    disabled={cartData.length === 0 ? true : false}>
                    Finalizar compra
                </button>
            </div>
        </div>
    )
}

export default Cart