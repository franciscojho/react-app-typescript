import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from "../data/products"
import '../styles/custom-styles.css'

export const ShoppingPage = () => {

    const product = products[0];
    
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div>
                <ProductCard
                    key={ product.id }
                    product={ product } 
                    className='bg-dark text-white'
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
                            <>
                                <ProductImage className='custom-image' />
                                <ProductTitle className='text-bold' />
                                <ProductButtons className='custom-buttons' />
                                <button onClick={ reset }>
                                    Reset
                                </button>
                                <button className='custom-buttons' onClick={() => increaseBy(-2)}>-2</button>
                                {
                                    ( !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>)
                                }
                                <span>{ count }</span>
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>  
    )   
}
