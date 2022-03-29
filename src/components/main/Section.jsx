import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionItem from './SectionItem';
import { useSelector } from 'react-redux';



export default function Section(props) {

    const color = props.color;
    const text = props.text;
    const query = props.qery;
    const list = useSelector(state => state.main.mainElements[query])
    //console.log(list)
    return (
        <div className="main__block">

            <div style={{ backgroundColor: color }} className="main__name">
                <div className="main__name-container">
                    <Link to={"/search/1/"+query}>
                        {text}
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="43.449" viewBox="0 0 50 43.449">
                            <g id="arrow-up-short" transform="translate(50) rotate(90)">
                                <path id="arrow-up-short-2" data-name="arrow-up-short"
                                    d="M26.224,53.652a3.1,3.1,0,0,0,3.1-3.1V14.6L42.645,27.922a3.107,3.107,0,1,0,4.394-4.394L28.421,4.911a3.1,3.1,0,0,0-4.394,0L5.409,23.529A3.107,3.107,0,0,0,9.8,27.922L23.121,14.6V50.549A3.1,3.1,0,0,0,26.224,53.652Z"
                                    transform="translate(-4.499 -3.999)" fill="#151a40" fillRule="evenodd" />
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="main__elements">
                {
                    list
                        ? list.slice(0, 5).map((elem, i) => {

                            return (<SectionItem key={i} element={elem} />)
                        })
                        : <></>
                }

            </div>



        </div>)
}