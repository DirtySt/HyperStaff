import React, {Component} from 'react';

import {BsFillTrash3Fill} from 'react-icons/bs'

class Order extends Component {
    render() {
        return (
            <div className={"item"}>
                <img src={'./img/'+ this.props.item.img} alt={"preview"}/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
                <BsFillTrash3Fill className={'delete-icon'} onClick={()=> this.props.onDelete(this.props.item.id)}/>
            </div>
        );
    }
}

export default Order;