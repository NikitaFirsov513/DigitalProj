import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    toggleIsFormOpen,
} from '../../redux/redusers/Slices/authSlice';
import './Header.scss'


export default function Header() {

    function toggleclassName(elem) {
        document.querySelector("." + elem).classNameList.toggle(elem + '--a');
        document.querySelector(".header__nav-category").classNameList.toggle('header__nav-category--a');
    }

    function toggleMenu() {
        document.querySelector('.header__anim').classList.toggle('header__anim--a');
    }

    function toggleAuth() {
        dispach(toggleIsFormOpen());
    }

    function search(e) {
        e.preventDefault();
        document.location.href = '/search/1/' + searchData.current.value;


    }

    const dispach = useDispatch();
    const category = useSelector(store => store.category.categoryList);
    const cardList = useSelector(store => store.card.cardList);
    let isAuthorizetion = useSelector(store => store.auth.isAuthorizetion)
    let userData = useSelector(store => store.auth.userData)
    let compareKol = useSelector(store => store.comparison.totalCol)

    let searchData = useRef(null)


    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top">
                    <div onClick={e => toggleMenu()} className="header__menu">
                        <svg id="list" xmlns="http://www.w3.org/2000/svg" width="43.75" height="35" viewBox="0 0 43.75 35">
                            <path id="list-2" data-name="list"
                                d="M46.25,36.556a1.967,1.967,0,0,0-1.989-1.944H4.489a1.945,1.945,0,1,0,0,3.889H44.261A1.967,1.967,0,0,0,46.25,36.556ZM46.25,21a1.967,1.967,0,0,0-1.989-1.944H4.489a1.945,1.945,0,1,0,0,3.889H44.261A1.967,1.967,0,0,0,46.25,21Zm0-15.556A1.967,1.967,0,0,0,44.261,3.5H4.489a1.945,1.945,0,1,0,0,3.889H44.261A1.967,1.967,0,0,0,46.25,5.444Z"
                                transform="translate(-2.5 -3.5)" fill="#fff" fillRule="evenodd" />
                        </svg>
                    </div>
                    <Link to="/" className="header__logo">
                        <p>Цифротех</p>
                    </Link>
                    <div className="header__search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.001" height="15.998" viewBox="0 0 16.001 15.998">
                            <g id="search_3_" data-name="search (3)" transform="translate(0 0)">
                                <path id="search_3_2" data-name="search (3)" d="M11.742,10.344a6.5,6.5,0,1,0-1.4,1.4h0a1.17,1.17,0,0,0,.1.115l3.85,3.85a1,1,0,0,0,1.415-1.414l-3.85-3.85a1.007,1.007,0,0,0-.115-.1ZM12,6.5A5.5,5.5,0,1,1,6.5,1,5.5,5.5,0,0,1,12,6.5Z" transform="translate(0.001 -0.002)" fill="#fff" />
                            </g>
                        </svg>
                        <form onSubmit={e=>search(e)} action=""><input ref={searchData} type="text" /></form>
                    </div>
                    <div className="header__elem">
                        <Link to="/basket"><p>Корзина</p><p>({cardList.length})</p></Link>
                    </div>
                    <div className="header__elem">
                        <Link to="/compare"><p>Сравнить</p><p>({compareKol})</p></Link>
                    </div>


                    {isAuthorizetion
                        ? <div className="header__elem">
                            <Link to="#"><p style={{ color: "#efa500" }}>{userData['Наименование']}</p><p></p></Link>
                        </div>



                        : <div onClick={e => toggleAuth()} className="header__elem">

                            <Link to="#"><p>Вход</p><p></p></Link>
                        </div>
                    }


                </div>
                <div className="header__bottom">
                    <nav>
                        <ul>
                            {category
                                ? category.map((elem, index) => {
                                    return (<li key={index}><Link to={'search/1/' + elem['URLName']}>{elem['name']}</Link></li>
                                    )
                                })
                                : <></>}
                        </ul>
                    </nav>
                </div>
                <div className="header__anim header__anim--a"></div>
            </div>
        </header>
    )
}