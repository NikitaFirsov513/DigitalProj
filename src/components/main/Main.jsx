import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAllElements, addNewElement } from '../../redux/redusers/Slices/mainSlice'
import '../search/Search.scss'
import './Main.scss'
import BrandList from './BrandList';
import Section from './Section';
export default function Main() {

    const poductAll = useSelector(state => state.productAll.productAllList);
    const dispach = useDispatch();


    useEffect(async () => {

        await dispach(setAllElements(poductAll))
        await dispach(addNewElement("Рекомендации"));
        await dispach(addNewElement("Samsung"));
        await dispach(addNewElement("Xiaomi"));


    }, [poductAll])

    return (
        <section className="main">
            <BrandList />
            <Section color={"#f3f3f3"} text={"Смартфоны Xiaomi"} qery={"Xiaomi"} />
            <Section color={"#EFA500"} text={"Смартфоны Xiaomi"} qery={"Xiaomi"} />

        </section>
    )
}