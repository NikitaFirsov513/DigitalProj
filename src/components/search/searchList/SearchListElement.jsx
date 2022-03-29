import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Element from './Element'

export default function SearchListElements() {

    const searchProduct = useSelector(state => state.searchList.searchListBeforeApplyQuery);

    console.log(searchProduct)
    return (

        <div className="search__list-elements">
            {searchProduct.map((element,index)=>{

                return(<Element key = {element['ТоварНаименование']} elem={element} />)

            })}
        
        </div>
    )
}



