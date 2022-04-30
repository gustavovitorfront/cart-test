import React from 'react'
import { convertReais } from '../../assets/helpers/Money';

function Items(props) {
    var data = props.row;

    var valueList = data.listPrice/100;
    var valuePrice = (data.sellingPrice * data.quantity) /100;

    return (
        <div className="item" key={data.uniqueId}>
            <div className="thumb">
                <img src={data.imageUrl} alt={data.name} title={data.name} />
                <span className="quantityField" title='Quantidade'>{data.quantity}</span>
            </div>
            <div className="infos">
                <h4 title={data.name}>{data.name}</h4>
                <p className='listPrice'>{convertReais(valueList)}</p>
                <p className='priceValue'>{convertReais(valuePrice)}</p>
            </div>
        </div>
    )
}

export default Items