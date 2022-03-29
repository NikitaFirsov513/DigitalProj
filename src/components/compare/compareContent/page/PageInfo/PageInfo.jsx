import React, { useEffect, useRef } from 'react';
import PageInfoElement from './PageInfoElement';



export default function PageInfo(props) {


    const element = props.element;


    return (

        <div className="compare__page-info">

            <div className="compare__page-info-element">
                <div className="compare__page-info-name">
                    <p>{element.name}</p>

                </div>


                {element.ParamsList.map((element, index) => {
                    return (
                        <PageInfoElement
                            key={index}
                            element={element} />
                    )

                })}


            </div>

        </div>
    )
}