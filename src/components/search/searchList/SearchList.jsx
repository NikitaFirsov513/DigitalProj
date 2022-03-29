import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchList, setSearchListByParams, setParams, setQuery, setSearchListByQery } from '../../../redux/redusers/Slices/searchSlise'
import { useSelector } from 'react-redux';
import SearchListElements from './SearchListElement'


export default function SearchList() {

    const poductAll = useSelector(state => state.productAll.productAllList);
    const searchProduct = useSelector(state => state.searchList.searchListBeforeApplyQuery);
    const searchParams = useSelector(state => state.searchList.searchParams);
    const dispach = useDispatch();

    let searchQery = useRef()


    /*При изменении query*/
    useEffect(async () => {

        dispach(setQuery(searchQery));

        if (searchProduct) {
            dispach(setSearchList(poductAll));
            dispach(setSearchListByQery());
        }
        else {
            dispach(setSearchList(poductAll));
        }

    }, [searchQery])

    /*При первой загрузке данных */
    useEffect(async () => {

        dispach(setSearchList(poductAll))
        dispach(setSearchListByQery());

    }, [poductAll])



    return (
        <>{
            searchProduct
                ?
                <div className="search__list">
                    <div className="search__list-params"></div>
                    <SearchListElements />

                </div>







                : <h1>asd</h1>
        }
        </>
    )
}


/**
 * 
 * <section classNameName=''>
                    {searchProduct.map((elem, index) => {


                        return (<h1 key={index}>
                            {elem['ТоварНаименование']}
                        </h1>)
                    })}
                </section>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */