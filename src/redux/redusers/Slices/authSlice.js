import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';

export const authSlice = createSlice({

    name: "auth",
    initialState: {
        isFormOpen: false,
        isLoginOpen: true,
        isAuthorizetion: false,
        userData: {},

    },



    reducers: {



        toggleIsFormOpen: (state, action) => {

            const isFormOpen = JSON.parse(JSON.stringify(state, undefined, 2)).isFormOpen;

            state.isFormOpen = !isFormOpen;

            return;

        },
        toggleisAuthorizetion: (state, action) => {

            const isAuthorizetion = JSON.parse(JSON.stringify(state, undefined, 2)).isAuthorizetion;

            state.isAuthorizetion = !isAuthorizetion;


            return;

        },
        toggleIsLoginOpen: (state, action) => {

            const isLoginOpen = JSON.parse(JSON.stringify(state, undefined, 2)).isLoginOpen;

            state.isLoginOpen = !isLoginOpen;


            return;

        },

        setUserData: (state, action) => {

            state.userData = action.payload

        },
        login: (state, action) => {

            const username = action.payload[0]
            const pass = action.payload[1]
            new Promise((resolve, reject) => {
                const req = fetch(`http://192.168.0.111:80/digital/hs/category/users/login`, {
                    method: 'POST',
                    body:
                        JSON.stringify({
                            "Email": username,
                            "Pass": pass
                        })
                });
                resolve(req);
            })
                .then(req => {
                    let res = req.json()
                    return res
                })
                .then(res => {
                    console.log(res)
                    state.isAuthorizetion = true
                    state.isFormOpen = false;
                    state.userData = res;


                })
                .catch(res => { console.log(res) })

        },

    }

})

export const {

    toggleIsFormOpen,
    toggleisAuthorizetion,
    toggleIsLoginOpen,
    setUserData,
    login,


} = authSlice.actions;

export default authSlice.reducer;