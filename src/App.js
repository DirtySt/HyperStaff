import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, {useState} from "react";
import Items from "./components/Items";



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items : [
                {
                    id: 1,
                    title: "TECHWEAR JACKET \"JAKETTO\"",
                    img: "Jaketto.jpg",
                    desc: "This windproof jacket is a real treat for anyone who loves techwear, or not!\n" +
                        "From a style point of view, it is unbeatable. You won't find this kind of jacket easily and certainly not in stores.\n" +
                        "It has pockets everywhere to keep your personal stuff safe, whether it's in the front, on the sides, or in the back, you'll always find a place to store your stuff. It's lightweight but ideal to protect you from the cold spring drafts. The perfect jacket for this spring season for techwear or streetwear lovers in general.",
                    category: "jacket",
                    price:"99.00"
                }
                ,{
                    id: 2,
                    title: "\"GULKO\" TECHWEAR JACKET",
                    img: "/Gulko.jpg",
                    desc: "When the weather becomes capricious, it is advisable to protect oneself from its bad weather. The ideal is to stay in the comfort of your home, protected by your walls. However, you can't afford to do this all the time, as the weather can surprise you. In these situations, having a protective jacket to face the bad weather may be necessary. The \"Gulko\" techwear jacket falls into the category of such protective clothing. Here's what you need to know about it.",
                    category: "jacket",
                    price:"149.00"
                }
                ,{
                    id: 3,
                    title: "WINDBREAKER TECHWEAR \"KUBOTA\"",
                    img: "/Kubota.jpg",
                    desc: "Planning a trip to the urban jungle in a rainy day, and don't like having to carry an umbrella? Then combine style and practicality with this urban Techwear \"Kubota\" windbreaker!\n" +
                        "In an urban trend and totally effective, it will satisfy your desire to be both stylish and weatherproof.",
                    category: "jacket",
                    price:"69.00"
                },{
                    id: 4,
                    title: "\"ZABU\" TECHWEAR HAREM PANTS",
                    img: "Zabu.jpg",
                    desc: "Techwear \"Zabu\" Sarouel Pants invite themselves into your closet with all their splendor and charm. Need the perfect pants for a special occasion? If so, then you've come to the right place. This style of pants is a hit with fashionistas. In terms of elegance and creativity, it is on another level. If you're dreaming of stocking your closet with quality pants, then it's time to take action. But before you do, you'll need to know more about this product.",
                    category: "pants",
                    price:"45.00"
                },{
                    id: 5,
                    title: "TECHWEAR CARGO PANTS \"NOKUTAN\"\n",
                    img: "Nokutan.jpg",
                    desc: "These pants combine streetwear style with tactical elements and are ideal for techwear style. The fit is perfect, the pockets blend perfectly with the straps and the elastic waistband is adjustable for maximum custom comfort.\n" +
                        "With multiple pockets to keep your essentials safe, these pants are inspired by the tactical pants of ground combat groups.",
                    category: "pants",
                    price:"52.00"
                },{
                    id: 6,
                    title: "TECHWEAR CARGO PANTS \"TATSUNO\"",
                    img:  "Tatsuno.jpg",
                    desc: "You like techwear? We have the cargo pants for you! Combining design, style and efficiency, these cargo pants are a great piece to add to your techwear collection. More than just a pair of pants, the bottom part detaches to become cargo shorts for those hot summer days. The pockets zipper up to keep all your precious stuff safe. A little gem that you must add to your wardrobe without delay.",
                    category: "pants",
                    price:"69.00"
                }
            ]
        }
        this.addToOrders = this.addToOrders.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    render(){
        return (
            <div className={"wrapper"}>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Items items={this.state.items} onAdd={this.addToOrders}/>
                <Footer/>
            </div>
        );
    }

    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrders(item){
        let isInArray = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id){
                isInArray = true;
            }
        })
        if (!isInArray)
            this.setState({orders:[...this.state.orders,item]},()=>console.log(this.state.orders))
        }
}

export default App;
