import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function BrandList() {

    return (
        <div className="main__brand">
            <div className="main__brand-element">
                <Link to="/search/1/Xiaomi" >
                    Xiaomi
                </Link>
            </div>
            <div className="main__brand-element">
                <Link to="/search/1/Samsung" >
                    Samsung
                </Link>
            </div>
            <div className="main__brand-element">
                <Link to="/search/1/Realme" >
                    Realme
                </Link>
            </div>
            <div className="main__brand-element">
                <Link to="/search/1/BQ" >
                    BQ
                </Link>
            </div>
            
        </div>
    )
}