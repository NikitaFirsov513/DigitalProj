
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Router, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
    toggleIsFormOpen,
    toggleIsLoginOpen,
} from '../../redux/redusers/Slices/authSlice';
import Login from './Login';
import Registration from './Registration';


export default function Form() {

    let isLoginOpen = useSelector(state => state.auth.isLoginOpen)

    return (
        <>
            {isLoginOpen
                ? <Login />
                : <Registration />}
        </>)
}