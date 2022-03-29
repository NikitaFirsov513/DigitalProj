import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageInfo from './PageInfo/PageInfo';
import {setActiveCategoryNameDefault,
    toggleToCompareList,
} from '../../../../redux/redusers/Slices/comparisonSlice'
import {
    addToCard,
    delateFromCard,
} from '../../../../redux/redusers/Slices/cardSlice'

export default function PageElement(props) {


    let element = props.element
    let name = props.name;
    let price = props.price;
    let image = props.image;
    let info = props.info;
    let groseryButton = useRef(null);
    let inGrosery = useState(false);
    let grosaryList = useSelector(state => state.card.cardList);

    let comparisonList = useSelector(state => state.comparison.comparisonList);
    let activeCategoryName = useSelector(state => state.comparison.activeCategoryName);

    const dispatch = useDispatch();

    useEffect(() => {
        inGrosery = grosaryList.some((elem) => elem['ТоварНаименование'] === element['ТоварНаименование'])
    }, [grosaryList])


    useEffect(() => {

        inGrosery = grosaryList.some((elem) => elem['ТоварНаименование'] === element['ТоварНаименование'])
        if (inGrosery && !groseryButton.current.classList.contains('search__list-grosery--active')) {
            toggleActive();
        }

    }, [])

    function toGrosery(element) {

        if (inGrosery) {
            //console.log("Убрали из корзины")
            dispatch(delateFromCard(element));

        }
        else {
           // console.log("Добавили в корзину")
            dispatch(addToCard(element));
        }
        inGrosery = !inGrosery;
        toggleActive();
    }



    function toggleActive() {
        groseryButton.current.classList.toggle('compare__page-buy--active');
    }
    //console.log(info)
    function delateFromCompare() {
        //toggleCompare()
        dispatch(toggleToCompareList(element))
        let col = null;

        comparisonList.forEach((e) => {

            if (activeCategoryName === e.categoryName) {
                col = e.productList.length;
            }


        })
        //console.log(col+"<<<<<<<<<<<<,")
        if(col ===1){

            dispatch(setActiveCategoryNameDefault())
        }



    }

    return (
        <>
            <div className="compare__page-element">

                <div className="compare__page-close">
                    <button onClick={e => delateFromCompare()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd"
                                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg>
                    </button>
                </div>
                <div className="compare__page-top">
                    <div className="compare__page-top-image">
                        <img src={image} alt="" />
                    </div>

                    <div className="compare__page-title">
                        <p>{name}</p>
                    </div>
                    <div ref={groseryButton} className="compare__page-buy">

                        <p>{price} p</p>
                        <button onClick={e => toGrosery(element)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-basket3" viewBox="0 0 16 16">
                                <path
                                    d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                            </svg>
                        </button>
                    </div>
                </div>


                {info.map((element, index) => {


                    return (<PageInfo key={index} element={element} />)
                })}





            </div>
            <div className="compare__page-border">
            </div>
        </>
    )
}