import { useState } from "react";
import { IngredientItem } from "../components/IngredientItem";
import { ingredients } from "../constants/Ingredients";
import './PriceSplit.css'
import React from 'react';


export const PriceSplit = () => {
    const [ingredient, setIngredient] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [listIngredients, setListIngredients] = useState(ingredients);
    const [listClaimedItems, setClaimedItems] = useState([]);
    const [balance, setBalance] = useState(0); 

    function addToTable() {
        const name = ingredient
        const num = parseInt(quantity)
        const priceNum = parseInt(price)
        setListIngredients((prevState) => {
            return [...prevState, { name: name, quantity: num, price: priceNum }]
        })
        setIngredient("");
        setQuantity(0);
        setPrice(0);
    }

    function handleChangeIngredient(event) {
        setIngredient(event.target.value)
    }

    function handleChangeQuantity(event) {
        setQuantity(event.target.value)
    }

    function handleChangePrice(event) {
        setPrice(event.target.value)
    }

    const handleClaim = (name, price) => {
        if (!listClaimedItems.includes(name)) {
            listClaimedItems.push(name);
            setClaimedItems(listClaimedItems);
            setBalance(balance + price);
        }
        else {
            console.log(listClaimedItems);
            const filteredList = listClaimedItems.filter(function(item) {
                return item !== name
            });
            setClaimedItems(filteredList);
            setBalance(balance - price);
        }
    }

    const handleAddAmount = (name) => {
        const copyList = [...listIngredients]
        listIngredients.forEach((item, idx) => {
            if (item.name === name) {
                console.log(item.quantity)
                copyList[idx] = { name: item.name, quantity: item.quantity + 1 }

            }
        });
        setListIngredients(copyList)
    }

    const handleSubtractAmount = (name) => {
        const copyList = [...listIngredients]
        listIngredients.forEach((item, idx) => {
            if (item.name === name) {
                let quantity
                if (item.quantity === 0) {
                    quantity = item.quantity
                }
                else {
                    quantity = item.quantity - 1
                }
                copyList[idx] = { name: item.name, quantity: quantity }

            }

        });
        setListIngredients(copyList)
    }


    return (
        <div id="outer">
            <div id="navbar" >
            </div>
            <div id="contents">
                <div id="header">
                    <h1>Ingredients</h1>
                </div>


                <table id="ingredientsTable" className='tablerow'>
                    <tbody className='flexbox colbox'>
                        <tr className='flexbox'>
                            <th className='flexbox rowitem' >Ingredients</th>
                            <th className='flexbox rowitem'>Quantity</th>
                            <th className='flexbox rowitem'>Price</th>
                            <td className='flexbox rowitem'></td>
                        </tr>
                        {
                            listIngredients.map(({ name, quantity, price }, idx) => {
                                return <IngredientItem key={idx} name={name} amount={quantity} price={price} handleAddAmount={() => handleAddAmount(name)} handleSubtractAmount={() => handleSubtractAmount(name)} handleClaim={() => handleClaim(name, price)} />
                            })
                        }
                 
                            <tr className='flexbox'>
                                <td className="flexbox">
                                    <input className='flexbox rowitem' type="text" id="addItem" name="addItem" placeholder="enter item" value={ingredient} onChange={handleChangeIngredient} />

                                </td>
                                <td className="flexbox">
                                    <input className='flexbox rowitem' type="text" id="addQuantity" name="addItem" placeholder="enter quantity" value={(quantity === 0) ? '' : quantity} onChange={handleChangeQuantity} />

                                </td>
                                <td className="flexbox">
                                    <input className='flexbox rowitem' type="text" id="addPrice" name="addPrice" placeholder="enter price" value={(price === 0) ? '' : price} onChange={handleChangePrice} />

                                </td>
                                <td className="flexbox ">
                                    <button className='flexbox rowitem' type="button" onClick={addToTable}>Add item</button>

                                </td>

                            </tr>
                    </tbody>



                </table>

             <div> 
                <h1> Balance: ${balance} </h1>
             
             </div>




            </div>

        </div>
    )
}


