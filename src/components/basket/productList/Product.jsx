import React, { useEffect } from 'react';
import ProductList from './ProductList';
import { useDispatch, useSelector } from 'react-redux';
import Buy from './Buy';



export default function Product() {

    let productList = useSelector(state => state.card.cardList);


    return (

        <div className="basket__container">
            {productList.length
                ? <>
                    <ProductList />
                    <Buy />
                </>
                : <h1>Ничего нет</h1>}

        </div>

    )
}