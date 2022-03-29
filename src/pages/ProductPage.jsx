import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/product/Product';
import getQueryFromUrl from '../utils/getQueryFromUrl';
import {
    setActiveElement,
    setMemoryList,
    setColorsList,

} from '../redux/redusers/Slices/product'

export default function ProductPage() {

    const params = getQueryFromUrl();
    const name = params['name'];
    const dispatch = useDispatch();
    const poductAll = useSelector(state => state.product.productAllList);

    useEffect(async () => {

        dispatch(setActiveElement(name));
        dispatch(setMemoryList());
        dispatch(setColorsList());

    }, [])
    useEffect(async () => {

        dispatch(setActiveElement(name));
        dispatch(setMemoryList());
        dispatch(setColorsList());

    }, [poductAll])

    return (

        <>
            {poductAll
                ? <Product name={name} />
                : <></>
            }

        </>
    )
}