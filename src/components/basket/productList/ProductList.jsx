import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductElement from './ProductElement';


export default function ProductList() {


    let productList = useSelector(state => state.card.cardList);


    return (




        <div className="basket__product">
            <p>Корзина</p>
            <div className="basket__list">
                {productList.map(element => {

                    return (<ProductElement key={element['ТоварНаименование']} element={element} />)


                })}






            </div>
        </div>
    )

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