import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategoryName, delateCategory, setActiveCategoryNameDefault } from '../../../../redux/redusers/Slices/comparisonSlice'

export default function TabsElement(props) {

    let element = props.element;
    let activeCategoryName = props.activeCategoryName;
    let tabElenent = useRef(null);

    const dispatch = useDispatch();


    useEffect(() => {

        if (tabElenent.current === null) {

            return;
        }


        if (element.categoryName === activeCategoryName
            &&
            !tabElenent.current.classList.contains('compare__tabs-element--active')) {

            toggleTab();
        }
        if (element.categoryName !== activeCategoryName
            &&
            tabElenent.current.classList.contains('compare__tabs-element--active')) {

            toggleTab();
        }


    }, [activeCategoryName]);


    useEffect(() => {

        if (tabElenent.current === null) {

            return;
        }

        if (element.categoryName === activeCategoryName
            &&
            !tabElenent.current.classList.contains('compare__tabs-element--active')
        ) {

            toggleTab();
        }
        if (element.categoryName !== activeCategoryName
            &&
            tabElenent.current.classList.contains('compare__tabs-element--active')
        ) {
            toggleTab();
        }


    }, []);

    function toggleTab() {
        tabElenent.current.classList.toggle('compare__tabs-element--active')
    }


    function setActive() {

        dispatch(setActiveCategoryName(element.categoryName))

    }
    function closeClick(event) {

        event.stopPropagation()
        dispatch(delateCategory(element.categoryName));
        dispatch(setActiveCategoryNameDefault());

    }

    return (
        <>
            {element.productList.length !== 0
                ? <div onClick={e => setActive()} ref={tabElenent} className="compare__tabs-element">
                    <p>{element.categoryName}</p>
                    <button onClick={e => closeClick(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fillRule="evenodd"
                                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg>
                    </button>
                </div>
                : <></>
            }
        </>
    )
}