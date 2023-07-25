import React, {useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"
import Order from "./Order";

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price));
    return(<div>
        {props.orders.map(el => (<Order onDelete={props.onDelete} key={el.id} item={el}/>))}
        <p className={"summa"}>Sum: {summa}$</p>
    </div>)
}

const showNothing = () => {
    return(<div className={"empty"}>
        <h3>cart is empty</h3>
    </div>)
}

const Header = (props) => {

    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className={'logo'}>Hyper Staff</span>
                <ul className={"nav"}>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
                <AiOutlineShoppingCart onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            </div>
            {cartOpen && (<div className={'shop-cart'}>

                {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>)}
            <div className={"presentation"}></div>
        </header>
    );
};

export default Header;