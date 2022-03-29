import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas'
import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './redusers/Slices/categorySlice'
import productAllReducer from './redusers/Slices/productAllSlice'
import searchReducer from './redusers/Slices/searchSlise'
import cardReducer from './redusers/Slices/cardSlice'
import mainReducer from './redusers/Slices/mainSlice'
import authReducer from './redusers/Slices/authSlice'
import productReducer from './redusers/Slices/product'
import comparisonReducer from './redusers/Slices/comparisonSlice'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({

    reducer: {

        category: categoryReducer,
        productAll: productAllReducer,
        searchList: searchReducer,
        card: cardReducer,
        main: mainReducer,
        auth: authReducer,
        product: productReducer,
        comparison: comparisonReducer,


    },
    middleware: [sagaMiddleware],
})




sagaMiddleware.run(rootSaga);



/*


const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

 



export default store;*/