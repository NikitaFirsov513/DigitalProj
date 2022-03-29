import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';



export const searchSlice = createSlice({

    name: "search",
    initialState: {

        searchList: undefined,
        searchListBeforeApplyQuery: undefined,
        searchQuery: null,
        searchParams: null,
        searchActiveParams: {},


    },

    reducers: {

        setSearchList: (state, action) => {

            state.searchList = action.payload;

        },
        setSearchListByParams(state, action) {

            console.log("Изменение searchList относительно serchParams")

        },

        setSearchListByQery(state, action) {

            const query = JSON.parse(JSON.stringify(state, undefined, 2)).searchQuery;
            const originalArray = JSON.parse(JSON.stringify(state, undefined, 2)).searchList;;

            let newArray = [];

            if (!originalArray)
                return;

            originalArray.forEach(element => {

                for (let key in element) {

                    const isString = (typeof element[key] == "string");

                    if (!isString) {
                        continue;
                    }

                    const elemToLowerCase = element[key].toLowerCase()
                    const queryToLowerCase = query.toLowerCase();
                    const isIndexOf = elemToLowerCase.indexOf(queryToLowerCase)

                    if (isIndexOf != -1) {

                        newArray.push(element)
                        break;
                    }
                }
            });

            state.searchList = newArray;
            state.searchListBeforeApplyQuery = newArray;


        },
        setParams: (state, action) => {

            state.searchParams = action.payload;


        },
        setParamsDefault: (state, action) => {

            state.searchParams = {

                minPrice: 0,
                maxPrice: 10000000,
                colors: [],
                brands: [],
                mainParams: [],


            };

        },
        setSearchActiveParamsDeffault: (state, action) => {

            state.searchActiveParams = {};

        },
        /*Добавление в активные параметры*/
        changeActiveParams: (state, action) => {

            let activeParams = JSON.parse(JSON.stringify(state, undefined, 2)).searchActiveParams;
            let newParams = action.payload;


            if (newParams.type == 'minPrice' || newParams.type == 'maxPrice') {

                activeParams[newParams.type] = newParams.value;
                state.searchActiveParams = activeParams;
                return;

            }


            if (activeParams[newParams.type]) {
                let index = activeParams[newParams.type].indexOf(newParams.value);

                if (index !== -1) {
                    activeParams[newParams.type].splice(index, 1);
                }
                else {
                    activeParams[newParams.type].push(newParams.value)
                }


            }

            if (!activeParams[newParams.type]) {
                activeParams[newParams.type] = [];
                activeParams[newParams.type].push(newParams.value)
            }

            console.log(activeParams)
            state.searchActiveParams = activeParams;



        },
        /*Вывод товара По парамтрам*/
        setSearchListByActiveParams: (state, action) => {

            console.log("Вывод товаров от ActiveParams")
            const activeParams = JSON.parse(JSON.stringify(state, undefined, 2)).searchActiveParams;
            const list = JSON.parse(JSON.stringify(state, undefined, 2)).searchList;
            let newArray = []
            //все параметры должны бить соблюдены
            const colParams = Object.keys(activeParams).length;




            console.group()
            console.log(list)
            console.log(activeParams)
            console.groupEnd()



            list.forEach(elem => {
                let colSimilarParams = 0;
                //console.log(elem)


                for (let key in activeParams) {

                    if (key == 'minPrice' || key == 'maxPrice') {


                        console.log(key)
                        console.log(activeParams)
                        switch (key) {
                            case 'minPrice':
                                console.log(activeParams['minPrice'])

                                if (elem['Цена'] > activeParams['minPrice'] || activeParams['minPrice']==0) {

                                    colSimilarParams++;
                                }
                                continue;
                            case 'maxPrice':
                                console.log(activeParams['minPrice'])

                                if (elem['Цена'] < activeParams['maxPrice']) {
                                    colSimilarParams++;
                                }
                                continue;

                        }

                    }

                    if (activeParams[key].length == 0) {
                        colSimilarParams++;
                        continue;

                    }

                    if (elem[key]) {

                        let isFindValue = activeParams[key].indexOf(elem[key])

                        if (isFindValue !== -1) {
                            colSimilarParams++;
                            continue;
                        }
                    }
                    elem['ТоварГлавныеХарактеристики'].map((elem, index) => {

                        if (key == elem['type']) {
                            let isFindProp = activeParams[key].indexOf(elem['value'])
                            if (isFindProp !== -1) {
                                colSimilarParams++;
                            }
                        }

                    })


                }






                /*
                if (activeParams['minPrice'] !== undefined) {

                    if (activeParams['minPrice'] < elem['Цена']) {

                        colSimilarParams++

                    }
                }


                if (activeParams['maxPrice'] !== undefined) {

                    if (activeParams['maxPrice'] > elem['Цена']) {
                        colSimilarParams++
                    }

                    if (activeParams['maxPrice'] == 0 || activeParams['maxPrice'] == null) {
                        colSimilarParams++

                    }
                }



                if (activeParams['colors']) {
                    let isFindColor = activeParams['colors'].indexOf(elem['ТоварЦветНаименование'])
                    if (isFindColor !== -1) {
                        colSimilarParams++
                    }
                }
                if (activeParams['colors']) {
                    if (activeParams['colors'].length == 0) {
                        colSimilarParams++
                    }
                }


                if (activeParams['brands']) {
                    let isFindBrand = activeParams['brands'].indexOf(elem['ТоварБрендНаименование'])
                    if (isFindBrand !== -1) {
                        colSimilarParams++
                    }
                }
                if (activeParams['brands']) {
                    if (activeParams['brands'].length == 0) {
                        colSimilarParams++
                    }
                }



*/







                /*console.log(colSimilarParams)
                console.log(colParams)*/

                if (colSimilarParams >= colParams) {
                    newArray.push(elem)
                }
            })



            state.searchListBeforeApplyQuery = newArray;
        },
        /*Создание полей с параметрами*/
        parseParams: (state, action) => {

            const searchList = JSON.parse(JSON.stringify(state, undefined, 2)).searchList;
            let newParams = JSON.parse(JSON.stringify(state, undefined, 2)).searchParams;

            if (!searchList) {
                return
            }


            searchList.map((elem) => {

                let isFindColor = newParams.colors.find(data => data.name == elem['ТоварЦветНаименование']);
                if (!isFindColor) {
                    newParams.colors.push({
                        name: elem['ТоварЦветНаименование'],
                        hex: elem['ТоварЦветhex']
                    })
                }

                let isFindBrand = newParams.brands.find(data => data.name == elem['ТоварБрендНаименование'])
                if (!isFindBrand) {
                    newParams.brands.push({ name: elem['ТоварБрендНаименование'] });
                }





                elem['ТоварГлавныеХарактеристики'].forEach((element, index, array) => {
                    //console.log(element)
                    index = null;
                    const isFindNameParams = newParams['mainParams'].find((e, i) => {
                        if (e['type'] == element['type']) {
                            index = i;
                            return true;
                        }
                    })
                    //console.log(isFindNameParams)
                    // console.log(index)

                    if (isFindNameParams !== undefined) {
                        const isFindValue = newParams['mainParams'][index]['value'].find((e, i) => e == element['value'])

                        if (!isFindValue) {
                            newParams['mainParams'][index]['value'].push(element['value'])
                        }
                    }
                    else {

                        //Нет такого парамтера
                        newParams['mainParams'].push({ type: element['type'], value: [element['value'],] })

                    }
                })




            })
            state.searchParams = newParams;

        },




        changeParams: (state, action) => {



        },

        setQuery: (state, action) => {

            state.searchQuery = action.payload;

        }

    }

})



export const {
    setSearchList,
    setSearchListByParams,
    setParams,
    setQuery,
    parseParams,
    setSearchListByQery,
    changeParams,
    setParamsDefault,
    setSearchActiveParamsDeffault,
    changeActiveParams,
    setSearchListByActiveParams, } = searchSlice.actions;


export default searchSlice.reducer;