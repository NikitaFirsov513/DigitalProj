import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sliderClick } from '../../../redux/redusers/Slices/product';


export default function ImageListElement(props) {


    const dispatch = useDispatch()
    const image = props.image;
    const index = props.index;

    function imageClick() {

        dispatch(sliderClick(index))

    }

    return (
        <div
            onClick={e => imageClick()}
            className={
                ["product__image-sub-list-element", (index == 0)
                    ? "product__image-sub-list-element--active"
                    : ""].join(" ")}>

            <img src={image} alt="" />

        </div>
    )
}