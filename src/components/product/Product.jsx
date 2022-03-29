import React, { useEffect, useRef } from 'react';
import './Product.scss'
import ProductHead from './ProductHead';
import ProductInform from './ProductInform/ProductInform';
import Recomindation from '../recomendation/Recomindation';
import {
    addToCard,
    delateFromCard,
} from '../../redux/redusers/Slices/cardSlice'
import {
    setGrosary,
    setCompare,
    setProductAllList,
    setActiveElement,
    setMemoryList,
    setColorsList,
} from '../../redux/redusers/Slices/product'
import { useDispatch, useSelector } from 'react-redux';


export default function Product(props) {


    const dispatch = useDispatch()
    const name = props.name;
    let grosaryList = useSelector(state => state.card.cardList)
    let compareList = useSelector(state => state.comparison.comparisonList)


    useEffect(() => {
        dispatch(setActiveElement(name));
        dispatch(setMemoryList());
        dispatch(setColorsList());
        dispatch(setCompare([compareList]));
        dispatch(setGrosary(grosaryList));
    }, [])

    return (

        <section className="product">
            <div className="product__contaiter">
                <ProductHead name={name} />
                <ProductInform />
                <Recomindation sliderName={"Xiaomi"} query={"Xiaomi"} type={"big"} />


            </div>
        </section>
    )
}