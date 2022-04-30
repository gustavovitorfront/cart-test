import React from 'react'
import Items from '../Items/Items'

const CartDetails = (props) => {
    var cartData = props.cartData;

    return (
        <>
            <div className="cartItens">
                {cartData.items && cartData.items.map((row) => (
                    <Items row={row} key={row.uniqueId} />
                ))}
            </div>
        </>
    )
}

export default CartDetails