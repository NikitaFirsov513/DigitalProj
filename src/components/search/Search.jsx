import React, {
    useEffect,
    useRef
} from 'react';
import { useSelector } from 'react-redux';
import './Search.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    setSearchList,
    setQuery,
    parseParams,
    setSearchListByQery,
    setParamsDefault,
    setSearchActiveParamsDeffault,
} from '../../redux/redusers/Slices/searchSlise'
import Lable from './lable/Lable';
import ParamsList from './params/ParamsList';
import SearchList from './searchList/SearchList';

export default function Search() {

    const poductAll = useSelector(state => state.productAll.productAllList);
    const searchProduct = useSelector(state => state.searchList.searchListBeforeApplyQuery);
    const searchParams = useSelector(state => state.searchList.searchParams);
    const dispach = useDispatch();

    let searchQery = useRef()

    searchQery = useParams().query


    /*При изменении query*/
    useEffect(async () => {

        dispach(setQuery(searchQery));

        if (searchProduct) {
            await dispach(setSearchList(poductAll));
            await dispach(setSearchListByQery());
            await dispach(setParamsDefault());
            await dispach(setSearchActiveParamsDeffault())
            await dispach(parseParams());

        }
        else {
            await dispach(setSearchList(poductAll));
            await dispach(setParamsDefault())
            await dispach(parseParams());
            await dispach(setSearchActiveParamsDeffault())
        }

    }, [searchQery])


    useEffect(async () => {

        await dispach(setSearchList(poductAll))
        await dispach(setSearchListByQery());
        await dispach(parseParams());

    }, [poductAll])
   

    return (
        <section className='search'>
            <div className="search__container">
                <Lable query={searchQery} />

                <div className="search__content">
                    <ParamsList />
                    <SearchList />
                </div>
            </div>
        </section>
    )
}
