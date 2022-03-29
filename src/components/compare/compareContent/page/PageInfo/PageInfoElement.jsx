import React, { useEffect, useRef } from 'react';


export default function PageInfoElement(props) {

    const element = props.element;

    return (


        <div className="compare__page-info-params">
            <p>{element.type}</p>
            <p>{element.value}</p>
        </div>
    )
}