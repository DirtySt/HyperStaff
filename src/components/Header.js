import React, {useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {

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
            <div className={"presentation"}></div>
        </header>
    );
};

export default Header;