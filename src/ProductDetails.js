import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './Shoes.json';

const ProductDetails = () => {
    const {productID} = useParams();
    const myShoe = Shoes[productID];
    console.log(myShoe);

    if(!myShoe)
        return <h2>Product not Found</h2>

    return (
        <div className="link">
            <h3>{myShoe.name}</h3>
            <img src={myShoe.img} height={450} alt='Shoe'/>
        </div>
    )
}
export default ProductDetails;