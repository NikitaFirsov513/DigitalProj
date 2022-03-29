import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ImageListElement from './ImageListElement';
import {
    setSliderDefault,
    sliderRight,
    sliderLeft,
} from '../../../redux/redusers/Slices/product'


export default function ImageList() {

    const elementImage = useSelector(state => state.product.activeElement);
    const activeImage = useSelector(state => state.product.activeImage);

    const sliderActive = useSelector(state => state.product.sliderActive);

    const dispatch = useDispatch();

    //dispatch(setSliderDefault())

    useEffect(() => {

        dispatch(setSliderDefault());
    }, [elementImage])

    //ТоварURLИзображений
    return (

        <div className="product__image-list">

            <div className="product__image-main">
                {activeImage
                    ? <img src={elementImage['ТоварURLИзображений'][sliderActive]} alt="" />
                    : <></>}

            </div>
            <div className="product__image-sub">

                <button onClick={e => { dispatch(sliderLeft()) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19.27" viewBox="0 0 15 19.27">
                        <g id="caret-up-fill" transform="translate(0 19.27) rotate(-90)">
                            <path id="caret-up-fill-2" data-name="caret-up-fill"
                                d="M10.586,5.2l-7.97,10.99c-.941,1.3-.176,3.326,1.251,3.326h15.94a1.676,1.676,0,0,0,1.515-1.176,2.337,2.337,0,0,0-.263-2.15L13.089,5.2a1.485,1.485,0,0,0-2.5,0Z"
                                transform="translate(-2.202 -4.519)" fill="#2a2a2a" />
                        </g>
                    </svg>
                </button>
                <div className="product__image-sub-container">
                    <div id="slider" className="product__image-sub-list">
                        {elementImage ?
                            elementImage['ТоварURLИзображений'].map((elem, index) => {
                                return (
                                    <ImageListElement key={elem} index={index} image={elem} />
                                )

                            })
                            : <></>}




                    </div>
                </div>
                <button onClick={e => { dispatch(sliderRight()) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19.27" viewBox="0 0 15 19.27">
                        <g id="caret-up-fill" transform="translate(15) rotate(90)">
                            <path id="caret-up-fill-2" data-name="caret-up-fill"
                                d="M10.586,5.2l-7.97,10.99c-.941,1.3-.176,3.326,1.251,3.326h15.94a1.676,1.676,0,0,0,1.515-1.176,2.337,2.337,0,0,0-.263-2.15L13.089,5.2a1.485,1.485,0,0,0-2.5,0Z"
                                transform="translate(-2.202 -4.519)" fill="#2a2a2a" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}
