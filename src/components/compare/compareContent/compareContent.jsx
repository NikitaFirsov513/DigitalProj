import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pages from './page/pages';
import Tabs from './tabs/tabs';
import {

    addActiaveCategory,
    toggleToCompareList,
    setActiveCategoryNameDefault,

} from '../../../redux/redusers/Slices/comparisonSlice'

export default function CompareContent() {


    let comparisonList = useSelector(state => state.comparison.comparisonList);
    let activeCategoryName = useSelector(state => state.comparison.activeCategoryName);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(setActiveCategoryNameDefault())

    }, [])


    return (

        <div className="compare__content">
            <Tabs comparisonList={comparisonList} activeCategoryName={activeCategoryName} />
            <Pages activeCategoryName={activeCategoryName} comparisonList={comparisonList} />
        </div>
    )
}