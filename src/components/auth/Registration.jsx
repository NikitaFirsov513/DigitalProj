
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, Router, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {

    toggleIsFormOpen,
    toggleisAuthorizetion,
    toggleIsLoginOpen,
    setUserData,
    login,


} from '../../redux/redusers/Slices/authSlice';


import { checkPass, checkUsername, isEmpty } from '../../utils/validator';
import { createUser } from '../../utils/createUser';



export default function Registration() {


    const dispatch = useDispatch();



    let loginData = useRef(
        {
            username: "",
            email: "",
            address: "",
            pass1: "",
            pass2: ""

        });
    let usernameAlert = useRef(null);
    let emailAlert = useRef(null);
    let addresssAlert = useRef(null);
    let pass1Alert = useRef(null);
    let pass2Alert = useRef(null);
    let usernameSpan = useRef(null);
    let addressSpan = useRef(null);
    let pass1Span = useRef(null);




    function toggleAuth() {
        dispatch(toggleIsFormOpen());
    }

    async function submit(e) {

        e.preventDefault();
        console.log(loginData.current)
        const user = loginData.current;
        const isNotEmpty = isEmpty(user)

        if (isNotEmpty === false) {
            return;
        }

        user.username = user.username.trim();
        user.email = user.email.trim();
        user.address = user.address.trim();
        user.pass1 = user.pass1.trim();
        user.pass2 = user.pass2.trim();

        const isUsernameValid = checkUsername(user.username)
        console.log("isUsernameValid>" + isUsernameValid)

        if (!isUsernameValid) {
            console.log("isUsernameValid>" + isUsernameValid)
            usernameAlert.current.style.borderColor = "#F90817";
        }

        const isPassValid = checkPass(user.pass1, user.pass2);

        if (!isPassValid) {
            console.log("isPassValid>" + isPassValid)
            pass1Alert.current.style.borderColor = "#F90817";
        }


        if (!isPassValid && !isUsernameValid)
            return;


        const res = await createUser(user)

        switch (res.status) {
            case 200:
                console.log("Все ок")

                let data = {
                    "Email": user.email,
                    "Пароль": user.pass1,
                    "Адресс": user.address,
                    "Наименование": user.username,
                    "Закладки": ""
                }

                dispatch(setUserData(data))
                dispatch(toggleisAuthorizetion())
                dispatch(toggleIsFormOpen())


                break;
            default:
                console.log("Все не ок")
            /* let data = await res.json()
             console.log(data)
             dispatch(setUserData(data))
             dispatch(toggleisAuthorizetion())
             dispatch(toggleIsFormOpen())*/


        }


    }

    function change(e) {

        const name = e.target.name;
        const val = e.target.value;
        loginData.current[name] = val;

    }

    function openLogin() {
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
                        <Link onClick={e => openLogin()} to="#">Вход</Link>
                        /
                        <Link className="login__lable--active" to="#">Регистрация</Link>
                    </div>
                    <form onSubmit={e => submit(e)} className="login__form" action="">
                        <div ref={usernameAlert} className="login__input">
                            <input
                                placeholder="Имя"
                                type="text"
                                onChange={e => change(e)}
                                name="username"
                                id=""
                            />
                            <div ref={usernameSpan} className="login__tooltip">!<span className="login__tooltiptext">Имя должно состоять из 3х слов <br />Прим: Иванов Иван Иванович </span></div>

                        </div>
                        <div ref={emailAlert} className="login__input">
                            <input
                                placeholder="Почта"
                                type="email"
                                onChange={e => change(e)}
                                name="email"
                                id="" />
                        </div>
                        <div ref={addresssAlert} className="login__input">
                            <input
                                placeholder="Адресс"
                                type="text"
                                onChange={e => change(e)}
                                name="address"
                                id="" />
                            <div ref={addressSpan} className="login__tooltip">!<span className="login__tooltiptext">Пример адресса</span></div>

                        </div>
                        <div ref={pass1Alert} className="login__input">
                            <input
                                placeholder="Пароль"
                                type="password"
                                onChange={e => change(e)}
                                name="pass1"
                                id="" />
                            <div ref={pass1Span} className="login__tooltip">!<span className="login__tooltiptext">Пароль должен состоять из</span></div>

                        </div>
                        <div ref={pass2Alert} className="login__input">
                            <input
                                placeholder="Повторить пароль"
                                type="password"
                                onChange={e => change(e)}
                                name="pass2"
                                id="" />
                        </div>

                        <div className="login__submit">
                            <input type="submit" value="Регистация" />
                        </div>

                    </form>
                </div>
            </div>
        </div>)
}/*


                        <div className="login__input">
                            <input placeholder="Имя" type="text" onChange={e => change(e)} name="username" id="" />
                            <div className="login__tooltip">!<span className="login__tooltiptext">Какой-тотекст</span></div>
                        </div>

                        <div className="login__input">
                            <input placeholder='Пароль' onChange={e => change(e)} type="text" name="pass" id="" />
                            <div className="login__tooltip login__tooltip--active">!<span className="login__tooltiptext">Какой-тотекст</span></div>
                        </div>

*/