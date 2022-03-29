import { fork, put, call } from 'redux-saga/effects'
import { setCategory } from '../redusers/Slices/categorySlice';
import { setProductAll } from '../redusers/Slices/productAllSlice';
import { setSearchList } from '../redusers/Slices/searchSlise'
import { setProductAllList } from '../redusers/Slices/product'
export default function* rootSaga() {

    yield loadData();

}


function* loadData() {

    yield fork(loadCategory)
    yield fork(loadProductsAll)

}

function* loadCategory() {

    const category = yield call(getDataAll, 'category')
    yield put(setCategory(category))



}

function* loadProductsAll() {

    const productsAll = yield call(getDataAll, 'product')

    //  console.log(productsAll)
    productsAll.map(elem => {
        
        elem['ТоварURLИзображений'] = JSON.parse(elem['ТоварURLИзображений'])
        elem['ТоварОписание'] = JSON.parse(elem['ТоварОписание']);
        elem['ТоварГлавныеХарактеристики'] = JSON.parse(elem['ТоварГлавныеХарактеристики']);
    })
    yield put(setProductAll(productsAll))
    yield put(setSearchList(productsAll))
    yield put(setProductAllList(productsAll))

}

async function getDataAll(type) {
    let req
    while (1) {
        req = await fetch(`http://192.168.0.111:80/digital/hs/${type}/all`, { method: 'GET', });
        
        if (req.ok) {
            break;
        }
    }




    const data = await req.json();
    return data;

}



//`http://192.168.0.111:80