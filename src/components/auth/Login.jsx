
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, Router, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authSaga } from '../../redux/sagas/auth';

import {

    toggleIsFormOpen,
    toggleisAuthorizetion,
    toggleIsLoginOpen,
    setUserData,
    login,


} from '../../redux/redusers/Slices/authSlice';
import loginFetch from '../../utils/login';


export default function Login() {


    let loginData = useRef({ username: null, pass: null });

    let isFormOpen = useSelector(state => state.auth.isFormOpen)
    let isAuthorizetion = useSelector(state => state.auth.isAuthorizetion)
    let userData = useSelector(state => state.auth.userData)
    let isLoginOpen = useSelector(state => state.auth.isLoginOpen)

    const dispatch = useDispatch();

    function toggleAuth() {
        dispatch(toggleIsFormOpen());
    }

    async function submit(e) {

        e.preventDefault();


        const res = await loginFetch(loginData.current.username, loginData.current.pass);

        console.log(res)

        switch (res.status) {
            case 200:

                let data = await res.json()
                console.log(data)
                dispatch(setUserData(data))
                dispatch(toggleisAuthorizetion())
                dispatch(toggleIsFormOpen())

                break;


        }
    }

    function change(e) {

        const name = e.target.name;
        const val = e.target.value;
        loginData.current[name] = val;

    }

    function openRegistration() {

        //console.log("openRegistration")
        dispatch(toggleIsLoginOpen())

    }





    return (
        <div className="login">
            <div className="login__container">
                <div className="login__close">
                    <button onClick={e => toggleAuth()}><svg id="x-lg_1_" data-name="x-lg (1)" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" viewBox="0 0 16 16">
                        <path id="Контур_7" data-name="Контур 7"
                            d="M17.8,2.195a.667.667,0,0,1,0,.944L3.139,17.8a.667.667,0,0,1-.944-.944L16.859,2.195a.667.667,0,0,1,.944,0Z"
                            transform="translate(-1.999 -1.999)" fill="#fff" fillRule="evenodd" />
                        <path id="Контур_8" data-name="Контур 8"
                            d="M2.195,2.195a.667.667,0,0,0,0,.944L16.859,17.8a.667.667,0,0,0,.944-.944L3.139,2.195a.667.667,0,0,0-.944,0Z"
                            transform="translate(-1.999 -1.999)" fill="#fff" fillRule="evenodd" />
                    </svg>
                    </button></div>
                <div className="login__content">
                    <div className="login__lable">
                        <Link className="login__lable--active" to="#">Вход</Link>
                        /
                        <Link onClick={e => openRegistration()} to="#">Регистрация</Link>
                    </div>
                    <form onSubmit={e => submit(e)} className="login__form" action="">

                        <div className="login__input">
                            <input placeholder="Имя" type="text" onChange={e => change(e)} name="username" id="" />
                            <div className="login__tooltip">!<span className="login__tooltiptext">Какой-тотекст</span></div>
                        </div>

                        <div className="login__input">
                            <input placeholder='Пароль' onChange={e => change(e)} type="password" name="pass" id="" />
                            <div className="login__tooltip login__tooltip--active">!<span className="login__tooltiptext">Какой-тотекст</span></div>
                        </div>
                        <div className="login__submit">
                            <input type="submit" value="Вход" />
                        </div>

                    </form>
                </div>
            </div>
        </div>)
}