import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MemoryList from './MemeryList';
import ColorsList from './ColorsList';
import ParamsList from './ParamsList';
import {
    addToCard,
    delateFromCard,
} from "../../../redux/redusers/Slices/cardSlice"
import { setGrosary, toggleGrosary } from '../../../redux/redusers/Slices/product'
export default function InformMain() {


    const element = useSelector(state => state.product.activeElement);
    const dispatch = useDispatch()
    let groseryButton = useRef(null);
    let inGrosery = useSelector(state => state.product.inGrosery)
    let grosaryList = useSelector(state => state.card.cardList)


    useEffect(() => {

        dispatch(setGrosary([grosaryList]));
        console.log('inGrosery>>>' + inGrosery)

    }, [])

    useEffect(() => {
        //console.log(groseryButton)
        if (groseryButton.current === null)
            return;

        console.log('inGrosery>>>' + inGrosery)

        if (inGrosery && !groseryButton.current.classList.contains('product__inform-buy--active'))
            toggleActive();
        if (!inGrosery && groseryButton.current.classList.contains('product__inform-buy--active'))
            toggleActive();


    }, [inGrosery, element])


    function toGrosery(element) {
        console.log('inGrosery>>>' + inGrosery)

        if (inGrosery) {
            console.log("Убрали из корзины")
            dispatch(delateFromCard(element));

        }
        else {
            console.log("Добавили в корзину")
            dispatch(addToCard(element));
        }
        inGrosery = !inGrosery;
        dispatch(toggleGrosary())
        toggleActive();
    }

    function toggleActive() {
        groseryButton.current.classList.toggle('product__inform-buy--active');
    }


    return (
        <div className="product__inform-prop-buy">

            <div className="product__inform-prop">

                <MemoryList />
                <ColorsList />
                <ParamsList />

            </div>
            {element
                ?
                <div ref={groseryButton} className="product__inform-buy">
                    <h1>{element['Цена']} р</h1>
                    <button onClick={e => toGrosery(element)}>В корзину</button>
                </div>
                : <></>}


        </div>)
}
