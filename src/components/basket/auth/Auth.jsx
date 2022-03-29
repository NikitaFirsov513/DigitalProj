import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotLogin from './NotLogin';
import UserInform from './UserInform';



export default function Auth(props) {


    let isAuthorizetion = useSelector(state => state.auth.isAuthorizetion)







    return (
        <div className="basket__container-form">
            <div className="basket__form">
                {isAuthorizetion
                    ? <UserInform />
                    : <NotLogin />

                }


                <div className="basket__map">
                    <img src="https://res.cloudinary.com/cifroteh/image/upload/v1647205001/digital/565x330_ydnlss.png" alt="" />
                </div>
            </div>
        </div>
    )



}