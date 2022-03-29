import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import {
    addToCard,
    delateFromCard,
} from "../../redux/redusers/Slices/cardSlice"

export default function SectionItem(props) {


    const element = props.element;
    const dispatch = useDispatch();

    let groseryButton = useRef(null);
    let inGrosery = useState(false);
    let grosaryList = useSelector(state => state.card.cardList);


    useEffect(() => {
        inGrosery = grosaryList.some((elem) => elem['ТоварНаименование'] === element['ТоварНаименование'])
    }, [grosaryList])
    useEffect(() => {




        inGrosery = grosaryList.some((elem) => elem['ТоварНаименование'] === element['ТоварНаименование'])


        if(inGrosery&&!groseryButton.current.classList.contains('search__list-grosery--active')){

            toggleActive();

        }
       

    }, [])

    function toGrosery(element) {

        if (inGrosery) {
            //console.log("Убрали из корзины")
            dispatch(delateFromCard(element));

        }
        else {
            //console.log("Добавили в корзину")
            dispatch(addToCard(element));
        }
        inGrosery = !inGrosery;
        toggleActive();
    }

    function toggleActive() {
        groseryButton.current.classList.toggle('search__list-grosery--active');
    }


    return (

        <div className="search__list-element">
            <img src={element['ТоварURLИзображений'][0]}
                alt="" />
            <div className="search__list-text">
                <div className="search__list-subtitle">
                </div>
                <div className="search__list-title">
                    <Link to={'/product?name=' + encodeURI(element['ТоварНаименование'])}>{element['ТоварНаименование']}</Link>
                </div>
            </div>
            <div className="search__list-buy">
                <div className="search__list-price">
                    <p>
                        {element['Цена']} p
                    </p>
                </div>
                <div ref={groseryButton} className="search__list-grosery " >
                    <button onClick={e => toGrosery(element)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                            <path
                                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                        </svg>


                    </button>
                </div>
            </div>

        </div>



    )
}