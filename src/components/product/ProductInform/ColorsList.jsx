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


export default function ColorsList() {

    const element = useSelector(state => state.product.activeElement);
    const colorList = useSelector(state => state.product.colorsList);
    const dispatch = useDispatch()

    // console.log(element)
    // console.log(colorList)

    function linkClick(clickName) {
        const name = element['ТоварНаименование']
        const params = getQueryFromUrl();
        //const clickName = params['name'];
        //console.log(name)
        //console.log(clickName)

        if (clickName == name)
            return;


        //console.log("Bvz-nj yt cjdgflftn")
        dispatch(setActiveElement(clickName));
        dispatch(setMemoryList());
        dispatch(setColorsList());

    }

    return (

        <div className="product__inform-colors">
            <p>Цвета:</p>
            <div className="product__inform-colors-list">
                {element
                    ? colorList.map((elem, index) => {

                        if (elem.hex == element['ТоварЦветhex']) {
                            //console.log("11111111111111")
                            return (<Link onClick={e => linkClick(elem.productName)} key={index} style={{ border: "3px solid #efa500", backgroundColor: elem.hex, padding: "9px" }} to={'/product?name=' + elem.productName}></Link>)
                        }
                        else {
                            return (<Link onClick={e => linkClick(elem.productName)} key={index} style={{ backgroundColor: elem.hex }} to={'/product?name=' + elem.productName}></Link>)
                        }

                    })
                    : <></>}
            </div>
        </div>

    )
}
//style="border: 4px solid #efa500"