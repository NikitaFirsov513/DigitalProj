import './Auth.scss'

import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Router, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from './Form';

export default function Auth() {


    let isFormOpen = useSelector(state => state.auth.isFormOpen)
    let isLoginOpen = useSelector(state => state.auth.isLoginOpen)


    return (<>

        {isFormOpen
            ? <Form/>
            : <></>
        }


    </>)
}

