import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Recomindation.scss'
import { setAllElements, addNewElement } from '../../redux/redusers/Slices/mainSlice'
import RecomindationElement from './RecomindationElement';




export default function Recomindation(props) {

    const poductAll = useSelector(state => state.productAll.productAllList);
    const dispatch = useDispatch();
    const sliderName = props.sliderName;
    const query = props.query;
    const list = useSelector(state => state.main.mainElements)
    const type = props.type;
    const widthElem = 155;
    //const width= (type==="small")?1000:

    let slider = useRef();
    let sliderContainer = useRef();

    let margin = 0;

    //console.log(list)
    useEffect(async () => {

        if (poductAll) {
           // console.log(poductAll)
            //console.log(query)
            await dispatch(setAllElements(poductAll))
            await dispatch(addNewElement(query));
            console.log(list)
        }

    }, [poductAll])


    function slideRight() {
        const colElem = list[query].length

        //console.log(slider.current.offsetWidth)
        //console.log(list[query].length)

        const allWidth = margin + slider.current.offsetWidth;

        if (allWidth < colElem * widthElem) {
            margin += 155;
            sliderContainer.current.style.marginLeft = - margin + "px";
        }


    }

    function slideLeft() {

       // console.log(slider.current.offsetWidth)
        //console.log(list[query].length)

        //const allWidth = margin + slider.current.offsetWidth;

        if (margin > 0) {
            margin -= 155;
            sliderContainer.current.style.marginLeft = - margin + "px";
        }


    }




    return (
        <>{(poductAll && query)
            ? <div className='recomindation'>
                <div className='recomindation__name'>
                    {sliderName}
                </div>
                <div className='recomindation__slider'>

                    <button onClick={e => slideLeft()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.245" height="35" viewBox="0 0 27.245 35">
                            <g id="caret-up-fill" transform="translate(0 35) rotate(-90)">
                                <path id="caret-up-fill-2" data-name="caret-up-fill" d="M17.431,5.761,2.954,25.722c-1.708,2.356-.32,6.042,2.273,6.042H34.181a3.045,3.045,0,0,0,2.751-2.137,4.244,4.244,0,0,0-.478-3.905L21.977,5.764a2.7,2.7,0,0,0-4.546,0Z" transform="translate(-2.202 -4.519)" fill="#2a2a2a" />
                            </g>
                        </svg>
                    </button>

                    <div ref={slider} className={'recomindation__slider-main-' + type}>
                        <div ref={sliderContainer} className='recomindation__slider-container'>

                            {(query in list)
                                ? list[query].map((element, index) => {
                                    return (<RecomindationElement key={index} element={element} />)
                                })
                                : <></>}
                        </div>
                    </div>

                    <button onClick={e => slideRight()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.245" height="35" viewBox="0 0 27.245 35">
                            <g id="caret-up-fill" transform="translate(27.245) rotate(90)">
                                <path id="caret-up-fill-2" data-name="caret-up-fill" d="M17.431,5.761,2.954,25.722c-1.708,2.356-.32,6.042,2.273,6.042H34.181a3.045,3.045,0,0,0,2.751-2.137,4.244,4.244,0,0,0-.478-3.905L21.977,5.764a2.7,2.7,0,0,0-4.546,0Z" transform="translate(-2.202 -4.519)" fill="#2a2a2a" />
                            </g>
                        </svg>

                    </button>

                </div>
            </div>
            : <></>}

        </>
    )
}