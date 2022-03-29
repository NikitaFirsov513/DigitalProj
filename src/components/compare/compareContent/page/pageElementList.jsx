import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageElement from './pageElement';



export default function PageElementList(props) {


    let elementList = props.elementList;






    return (<>

        {elementList.map(e => {

            return (


                <PageElement
                    element={e}
                    key={e['ТоварНаименование']}
                    name={e['ТоварНаименование']}
                    price={e['Цена']}
                    image={e['ТоварURLИзображений'][0]}
                    info={e['ТоварОписание']}



                />
            )
        })}
    </>)
}