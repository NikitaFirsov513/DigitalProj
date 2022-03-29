import React,
{
    useEffect,
    useRef
} from 'react';
import ParamsColor from './ParamsColor';
import ParamsInputList from './ParamsInputList';
import ParamsNumber from './ParamsNumber';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    setSearchList,
    setSearchListByParams,
    setParams,
    setQuery,
    parseParams,
    setSearchListByQery,
    changeParams,
    setParamsDefault,
    setSearchActiveParamsDeffault,
    changeActiveParams,
    setSearchListByActiveParams,
} from '../../../redux/redusers/Slices/searchSlise';



export default function ParamsMainItem(props) {

    const dispach = useDispatch();
    const elem = useRef(null);
    const lable = useRef(null);

    const type = props.type;
    const valueList = props.valueList;


    function toogleActive() {
        elem.current.classList.toggle('search__params-elem--active')
        lable.current.classList.toggle('search__params-lable--active')
    }


    function toggleActiveParams(obj) {

        dispach(changeActiveParams(obj));
        dispach(setSearchListByActiveParams());

    }



    return (<div ref={elem} className="search__params-elem search__params-elem--active">
        <div ref={lable} onClick={(e) => toogleActive()} ref={lable} className="search__params-lable search__params-lable--active">
            <p>{type}</p>
            <svg id="caret-down-fill" xmlns="http://www.w3.org/2000/svg" width="18.6" height="12"
                viewBox="0 0 18.6 12">
                <path id="caret-down-fill-2" data-name="caret-down-fill"
                    d="M10.295,15.453,2.6,6.66A1.6,1.6,0,0,1,3.809,4H19.2A1.6,1.6,0,0,1,20.4,6.661l-7.693,8.79a1.6,1.6,0,0,1-2.416,0Z"
                    transform="translate(-2.202 -4)" fill="#2a2a2a" />
            </svg>
        </div>


        <div className="search__params-inputlist">
 
            {
                valueList.map((elem, index) => {

                    return (
                        <label key={elem} htmlFor="">
                            <input onChange={e => toggleActiveParams({ type: type, value: elem })} className="search__params-checkinput" type="checkbox" name="" id="" />
                            <div className="search__params-costomcheckbox" > </div>
                            {elem}
                        </label>
                    )
                })
            }


        </div>
    </div>)
}