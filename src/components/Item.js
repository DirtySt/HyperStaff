import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div className={"item"}>
                <img src={'./img/'+ this.props.item.img} alt={"preview"}/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
                <div className={"add-to-cart"} onClick={()=> this.props.onAdd(this.props.item)}>+</div>
            </div>
        );
    }
}

export default Item;