import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import getQueryFromUrl from '../../../utils/getQueryFromUrl';
import {
    setProductAllList,
    setActiveElement,
    setMemoryList,
    setColorsList,
} from '../../../redux/redusers/Slices/product'
export default function MemoryList() {

    const element = useSelector(state => state.product.activeElement);
    const memoryList = useSelector(state => state.product.memoryList);
    const dispatch = useDispatch()



    //console.log(memoryList)


    function linkClick(clickName) {
        const name = element['ТоварНаименование']
        const params = getQueryFromUrl();
        //const clickName = params['name'];
        //console.log(name)
        //console.log(clickName)

        if (clickName == name)
            return;


        console.log("Bvz-nj yt cjdgflftn")
        dispatch(setActiveElement(clickName));
        dispatch(setMemoryList());
        dispatch(setColorsList());

    }

    return (
        <div className="product__inform-prop-element-memo">
            <p>Объем памяти:</p>

            <div className="product__inform-prop-element-link">
                {element
                    ? memoryList.map((elem, index) => {

                        if (elem.value == element['ТоварПамять'])
                            return (<Link key={index} onClick={e => linkClick(elem.name)} style={{ "backgroundColor": "#efa500" }} to={'/product?name=' + elem.name} >{elem.value}</Link>)
                        else
                            return (<Link key={index} onClick={e => linkClick(elem.name)} to={'/product?name=' + elem.name} >{elem.value}</Link>)
                    })
                    : <></>


                }


            </div>

        </div>

    )
}

/*








 <a className="product__inform-prop-element-link--" href="#">4/64</a>
                <a href="#" style="background-color: #efa500;"
                    className="product__inform-prop-element-memo--active">8/128</a>
          

*/