import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



export default function UserInform(props) {


    let userData = useSelector(state => state.auth.userData)


    return (
        <div className="basket__form-name">
            <p>
                ВашиДанные
            </p>
            <div className="basket__form-list">

                <div className="basket__form-elem">
                    <p>Имя</p>
                    <p>{userData['Наименование']}</p>
                </div>

                <div className="basket__form-elem">
                    <p>Почта</p>
                    <p>{userData['Email']}</p>
                </div>

                <div className="basket__form-elem">
                    <p>Телефон</p>
                    <p>Пока нет</p>
                </div>

                <div className="basket__form-elem">
                    <p>Адресс</p>
                    <p>{userData['Адресс']}</p>
                </div>


            </div>

        </div>
    )
}