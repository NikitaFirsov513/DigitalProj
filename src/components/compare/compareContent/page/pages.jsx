import React, { useEffect, useRef } from 'react';
import PageElement from './pageElement';
import PageElementList from './pageElementList';




export default function Pages(props) {



    let comparisonList = props.comparisonList;
    let activeCategoryName = props.activeCategoryName;




    return (
        <div className="compare__page">

            {
                comparisonList.map(e => {
                    if (e.categoryName === activeCategoryName) {
                        return (<PageElementList key={e.categoryName} elementList={e.productList} />)
                    }
                })}







        </div>)
}