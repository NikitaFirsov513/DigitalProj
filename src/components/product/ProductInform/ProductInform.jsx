import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Recomindation from '../../recomendation/Recomindation';
import ImageList from './ImageList';
import InformMain from './InformMain';


export default function ProductInform() {


    return (

        <div className="product__inform">


            <ImageList />

            <div className="product__inform-main">
                <InformMain />
            </div>

        </div >


    )

}

//                <Recomindation sliderName={"Xiaomi"} query={"Xiaomi"} type = {"small"} />
