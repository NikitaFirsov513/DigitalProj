import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import getQueryFromUrl from '../../../utils/getQueryFromUrl';
import {
    setProductAllList,
    setActiveElement,
    setMemoryList,
    setColorsList,
} from '../../../redux/redusers/Slices/product'

export default function ParamsList() {

    const element = useSelector(state => state.product.activeElement);
    const dispatch = useDispatch()

    return (

        <div className="product__inform-property">

            <p>Основные характеристики:</p>
            <div className="product__inform-property-list">
                {
                    element
                        ? element['ТоварГлавныеХарактеристики'].map((element, index) => {
                            return (
                                <div key={index} className="product__inform-property-list-elem">
                                    <p>{element.type}</p>
                                    <p>{element.value}</p>
                                </div>
                            )
                        })
                        : <></>
                }
            </div>
        </div>
    )
}
/*



<div className="product__inform-property-list-elem">
                <p>Gfhfvtnh</p>
                <p>Pyfxtybt</p>
            </div>

*/