import './Style.css'
import { useState } from "react";
import { IngredientItem } from "../components/IngredientItem";
import { ingredients } from "../constants/Ingredients";
import logo from '../images/logo.jpeg';




export const IngredientsPage = () => {
    const [ingredient, setIngredient] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [listIngredients, setListIngredients] = useState(ingredients);



    function addToTable() {
        const name = ingredient
        const num = parseInt(quantity)
        setListIngredients((prevState) => {
            return [...prevState, { name: name, quantity: num }]
        })
        setIngredient("");
        setQuantity(0);
    }

    function handleChangeIngredient(event) {
        setIngredient(event.target.value)
    }

    function handleChangeQuantity(event) {
        setQuantity(event.target.value)
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
                <img src={logo} id='logo' />
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
                            <td className='flexbox rowitem'></td>
                        </tr>
                        {
                            listIngredients.map(({ name, quantity }, idx) => {
                                return <IngredientItem key={idx} name={name} amount={quantity} handleAddAmount={() => handleAddAmount(name)} handleSubtractAmount={() => handleSubtractAmount(name)} />
                            })
                        }
                 
                            <tr className='flexbox'>
                                <td className="flexbox">
                                    <input className='flexbox rowitem' type="text" id="addItem" name="addItem" placeholder="enter ingredient" value={ingredient} onChange={handleChangeIngredient} />

                                </td>
                                <td className="flexbox">
                                    <input className='flexbox rowitem' type="text" id="addQuantity" name="addItem" placeholder="enter quantity" value={(quantity === 0) ? '' : quantity} onChange={handleChangeQuantity} />

                                </td>
                                <td className="flexbox ">
                                    <button className='flexbox rowitem' type="button" onClick={addToTable}>Add item</button>

                                </td>

                            </tr>
                    </tbody>



                </table>




            </div>

        </div>
    )
}


