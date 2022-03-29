import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchOrder from '../../../utils/fetchOrder';




export default function Buy() {

    const totalPrice = useSelector(state => state.card.totalPrice);
    const userData = useSelector(state => state.auth.userData);
    const isAuthorizetion = useSelector(state => state.auth.isAuthorizetion);

    const allCard = useSelector(state => state.card.cardList);



    async function createOrder() {
        let res = await fetchOrder(userData, allCard)

        switch (res.status) {
            case 200:
                console.log("Запрос Обработан")
                break;

            default:
                alert("Что-то не так")
                break;
        }
    }



    return (
        <div className="basket__buy">
            <div className="basket__buy-price">
                <p>Итого</p>
                <p>{totalPrice} р</p>
            </div>
            <div className="basket__buy-button">

                {isAuthorizetion
                    ?
                    <button
                        onClick={e => createOrder()}
                    >Заказать</button>
                    :
                    <button style={{cursor:"not-allowed"}}>Заказать</button>}

            </div>
        </div>)
}