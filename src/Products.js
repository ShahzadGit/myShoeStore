import React from 'react'
import Shoes from './Shoes';
import { Link, Outlet } from 'react-router-dom';


console.log(Shoes);
const Products = () => {
    return (
        <div>
            <h2>List of Shoes...</h2> <hr />

            <div className="productContainer">

                {Object.keys(Shoes).map(prodID => {
                    const shoe = Shoes[prodID];
                    return (
                        <Link key={prodID} className='link'
                            to={`/products/${prodID}`}>
                            <h3>{shoe.name}</h3>
                            <img src={shoe.img} height={150} alt='Shoe' />

                        </Link>

                    )
                })}
                <Outlet />
            </div>
        </div>
    )
}
export default Products;