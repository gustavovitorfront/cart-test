import React from 'react'
import { convertReais } from '../../assets/helpers/Money';

const Totalizers = (props) => {

    var data = props.totalizerData;
    var totalGeneral = 0;

    if (data) {
        if (data.length === 2) {
            totalGeneral = (data[0].value + data[1].value) / 100;
        }
    }

    return (
        <div className="totalBox">
            <div className="totais">
                <h4 className='totalLabel'>Total</h4>
                <h4 className='totalValue'>{convertReais(totalGeneral)}</h4>
            </div>

            {totalGeneral > 10 ? (
                <div className="alertFrete">
                    Parabéns, sua compra tem frete grátis !
                </div>
            ) : ""}

        </div>
    )
}

export default Totalizers