import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
    addKol,
    cahangeTotalPrice,
    difKol,
    addToCard,
    delateFromCard,
} from '../../../redux/redusers/Slices/cardSlice'

export default function ProductElement(props) {

    let element = props.element;

    const dispatch = useDispatch();


    function add() {
        //console.log("add")
        dispatch(addKol(element))
        dispatch(cahangeTotalPrice())
    }

    function dif() {
        dispatch(difKol(element))
        dispatch(cahangeTotalPrice())
    }
    function delate() {

        dispatch(delateFromCard(element))
        dispatch(cahangeTotalPrice())

    }



    return (
        <div className="basket__list-elem">

            <div className="basket__list-left">
                <div className="basket__list-image">
                    <img src={element['ТоварURLИзображений'][0]} alt="" />
                </div>
                <div className="basket__list-inform">
                    <div className="basket__list-name">
                        <a href={"/product?name=" + element['ТоварНаименование']}>{element['ТоварНаименование']}</a>
                    </div>
                    <div className="basket__list-prop">

                        {element['ТоварГлавныеХарактеристики'].map(elem => {

                            return (<div key={elem.type} className="basket__list-prop-elem">
                                <p>{elem.type}:</p>
                                <p>{elem.value}</p>
                            </div>)
                        })}


                    </div>
                </div>
            </div>
            <div className="basket__list-right">
                <div className="basket__list-buttons">

                    {element['Количество'] == 1
                        ? <button
                            style={{ color: "#B7B7B7" }}
                            onClick={e => dif()}
                        >-</button>
                        : <button
                            onClick={e => dif()}
                        >-</button>

                    }



                    <p>{element['Количество']}</p>
                    {element['Количество'] == element['КоличествоОстаток']
                        ? <button style={{ color: "#B7B7B7" }} onClick={e => add()}>-</button>
                        : <button onClick={e => add()}>-</button>

                    }                </div>
                <div className="basket__list-price">
                    {element['Сумма']} р
                </div>
                <div className="basket__trash">
                    <button onClick={e => delate()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash2" viewBox="0 0 16 16">
                            <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>)

}



/*


<div className="basket__list-elem">

                    <div className="basket__list-left">
                        <div className="basket__list-image">
                            <img src="https://res.cloudinary.com/cifroteh/image/upload/v1645521758/digital/smartphones/realme/c25s/blue/one_gnmwob.jpg" alt="" />
                        </div>
                        <div className="basket__list-inform">
                            <div className="basket__list-name">
                                <a href="#">Samsung Galaxy A51 6/128GB</a>
                            </div>
                            <div className="basket__list-prop">
                                <div className="basket__list-prop-elem">
                                    <p>Параметр:</p>
                                    <p>Значение</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="basket__list-right">
                        <div className="basket__list-buttons">
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                        <div className="basket__list-price">
                            12000p
                        </div>
                    </div>

                </div>


*/