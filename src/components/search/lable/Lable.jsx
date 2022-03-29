import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setQueryOutput } from '../../../redux/redusers/Slices/categorySlice'


export default function Lable(props) {


    const query = props.query;
    const category = useSelector(store => store.category.categoryList);
    const dispach = useDispatch();

    let queryOutput = useSelector(store => store.category.queryOutput);



    function changeLable(){
        
        let isCategory = false;
        if (!category) {
            return
        }

        category.map((elem, index) => {


           
            if (elem['URLName'] == query) {
                dispach(setQueryOutput(elem['name']))
                isCategory=true;
            }

        })
        if (!isCategory) {
            dispach(setQueryOutput(`Поиск по запросу "${query}"`))
        }
    }


    useEffect(() => {
        changeLable();

    }, [query, category])
    useEffect(() => {
        changeLable();

    }, [])
    
    



    return (
        <div className="search__lable">
            <p>{queryOutput}</p>
        </div>
    )
}