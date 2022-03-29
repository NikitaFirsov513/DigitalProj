import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    toggleIsFormOpen,
} from '../../../redux/redusers/Slices/authSlice.js';



export default function NotLogin() {

    const dispatch = useDispatch();

    function toggleAuth() {
        dispatch(toggleIsFormOpen());
    }


    return (
        <div className="basket__user">
            <p>
                Вы не авторизированы
            </p>
            <button onClick={e=>toggleAuth()} >
                Авторизироваться
            </button>

        </div>
    )
}