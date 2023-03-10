import React from 'react';
import '../pages/PriceSplit.css'
export function IngredientItem(props)   {

    return (
        <tr className="flexbox">
                    <td className="flexbox rowitem existing-items">
                        {props.name}
                    </td>
                    <td className="flexbox rowitem existing-items">
                        {props.amount}
                    </td>
                    <td className="flexbox rowitem existing-items">
                        ${props.price} 
                    </td>
                    <td className="flexbox rowitem">
                        <button className='flexbox rowitem' id="claimItem" onClick={props.handleClaim}>Claim!</button>
                    </td>
                </tr>
    )
}