import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addToCard,
    delateFromCard,
} from '../../redux/redusers/Slices/cardSlice';
import {

    addActiaveCategory,
    toggleToCompareList,

} from '../../redux/redusers/Slices/comparisonSlice';
import {
    toggleInCompare,
    toggleInFavorites,
    setCompare,
} from '../../redux/redusers/Slices/product'


export default function ProductHead(props) {

    const name = props.name;
    const favorites = useRef(null)
    const сompare = useRef(null)
    const dispatch = useDispatch();
    const element = useSelector(state => state.product.activeElement);


    let inCompare = useSelector(state => state.product.inCompare)
    let inFavorites = useSelector(state => state.product.inFavorites)
    let compareList = useSelector(state => state.comparison.comparisonList)


    useEffect(() => {

        dispatch(setCompare([compareList]));

    }, [])

    function toFavorites() {

        toggleFavorites()
    }

    function toggleFavorites() {
        favorites.current.classList.toggle('product__head-buttons-element--active');
        inFavorites = !inFavorites;

        dispatch(toggleInFavorites())
    }



    function toCompare() {
        //toggleCompare()
        dispatch(toggleToCompareList(element))
        dispatch(toggleInCompare())
    }
    useEffect(() => {

        if (inCompare && !сompare.current.classList.contains('product__head-buttons-element--active')) {
            toggleCompare()
        }
        if (!inCompare && сompare.current.classList.contains('product__head-buttons-element--active')) {
            toggleCompare()
        }

    }, [inCompare])

    function toggleCompare() {
        сompare.current.classList.toggle('product__head-buttons-element--active');
    }


    return (

        <div className="product__head">
            <p className="product__head-name">
                {element
                    ? element['ТоварНаименование']
                    : <></>}
            </p>
            <div className="product__head-buttons">
                <button onClick={e => toFavorites()} ref={favorites} className="product__head-buttons-element">
                    Избранное
                </button>
                <button onClick={e => toCompare()} ref={сompare} className="product__head-buttons-element">
                    Сравнить
                </button>
            </div>

        </div>

    )
}