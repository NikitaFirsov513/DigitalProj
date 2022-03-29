import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    addToCard,
    delateFromCard,
} from '../../redux/redusers/Slices/cardSlice';
import getQueryFromUrl from '../../utils/getQueryFromUrl'
import {setGrosary,
    setCompare,
    setProductAllList,
    setActiveElement,
    setMemoryList,
    setColorsList,
} from '../../redux/redusers/Slices/product.js'

export default function RecomindationElement(props) {
    let grosaryList = useSelector(state => state.card.cardList)
    const element = props.element;
    let groseryButton = useRef(null)
    const dispatch = useDispatch();
    let inGrosery = false;
    let compareList = useSelector(state => state.comparison.comparisonList)

    function linkClick(clickName) {
        const params = getQueryFromUrl();
        const name = params.name

        if (clickName == name)
            return;

        window.scrollTo("x-coord", 0);

        dispatch(setActiveElement(clickName));
        dispatch(setMemoryList());
        dispatch(setColorsList());
        dispatch(setCompare([compareList]));
        dispatch(setGrosary(grosaryList));



    }



    function toGrosery(element) {

        if (inGrosery) {
            console.log("Убрали из корзины")
            dispatch(delateFromCard(element));

        }
        else {
            console.log("Добавили в корзину")
            dispatch(addToCard(element));
        }
        inGrosery = !inGrosery;
        toggleActive();
    }



    function toggleActive() {
        groseryButton.current.classList.toggle('recomindation__slider-buy--active');
    }


    return (
        <div className="recomindation__slider-element">
            <div className='recomindation__slider-image'>
                <img src={element['ТоварURLИзображений'][0]} alt="" />
            </div>
            <div className='recomindation__slider-text'>
                <div className='recomindation__slider-name'>
                    <Link onClick={e => linkClick(element['ТоварНаименование'])} to={'/product?name=' + encodeURI(element['ТоварНаименование'])}>{element['ТоварНаименование']}</Link>
                </div>
                <div ref={groseryButton} className='recomindation__slider-buy '>
                    <p>{element['Цена']} p</p>
                    <button onClick={e => toGrosery(element)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                            <path
                                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>)

}