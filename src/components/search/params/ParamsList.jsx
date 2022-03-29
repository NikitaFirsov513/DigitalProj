import React,
{
    useEffect,
    useRef
} from 'react';
import ParamsColor from './ParamsColor';
import ParamsInputList from './ParamsInputList';
import ParamsNumber from './ParamsNumber';
import ParamsMainItem from './ParamsMainItem'
import {
    useSelector,
    useDispatch
} from 'react-redux';




export default function ParamsList() {

    let paramsList = useSelector(state => state.searchList.searchParams)
    console.log(paramsList)
    return (
        <>
            {paramsList !== null
                ? <div className="search__params">
                    <ParamsNumber />
                    {paramsList.colors ?
                        <ParamsColor />
                        :
                        <></>
                    }
                    {paramsList.brands ?
                        <ParamsInputList />
                        :
                        <></>
                    }
                    {paramsList.mainParams ?
                        paramsList.mainParams.map((elem,index)=>{
                            return(<ParamsMainItem key = {elem['type']} type={elem['type']}valueList={elem['value']} />)
                        }):<></>
                    
                    }
                    
                </div>
                : <></>}

        </>


    )
}
/* <div className="search__params">
            {paramsList ? 
            
            <ParamsNumber />

            {
                paramsList.colors ?
                    <ParamsColor colors={paramsList.colors} />
                    :
                    <></>

            }
            <ParamsInputList />
            :
            <></>
            
        }

        </div>*/