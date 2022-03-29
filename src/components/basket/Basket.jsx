import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Basket.scss'
import Product from './productList/Product';
import {
    cahangeTotalPrice,
} from '../../redux/redusers/Slices/cardSlice'
import Auth from './auth/Auth';

export default function Basket() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cahangeTotalPrice())
    }, [])



    return (





        <section className="basket">

            <Product />

            <Auth/>


            



        </section>

    )
}

/*
<div className="basket__container-form">


                <div className="basket__form">

                    <div className="basket__user">
                        <p>
                            Вы не авторизированы
                        </p>
                        <button>
                            Авторизироваться
                        </button>

                    </div>
                    <div className="basket__map">
                        <img src="https://res.cloudinary.com/cifroteh/image/upload/v1647205001/digital/565x330_ydnlss.png" alt="" />
                    </div>

                </div>

            </div>




*/