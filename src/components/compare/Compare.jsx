import React, { useEffect } from 'react';
import CompareContent from './compareContent/compareContent';

import './Compare.scss'
import { useSelector } from 'react-redux';



export default function Compare() {

    let colElem = useSelector(state => state.comparison.totalCol);

    return (

        <section className="compare">
            <div className="compare__container">

                {colElem === 0 ?
                    <h1>Ничего нет</h1>
                    :
                    <>
                        <div className="compare__title">
                            <p>Сравнение товаров</p>
                        </div>

                        <CompareContent />
                    </>

                }

            </div>

        </section>
    )
}