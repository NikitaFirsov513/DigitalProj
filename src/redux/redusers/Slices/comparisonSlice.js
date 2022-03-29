import { createSlice } from '@reduxjs/toolkit'




export const comparisonSlice = createSlice({

    name: "comparison",

    initialState: {

        comparisonList: [],
        activeCategoryName: null,
        totalCol: 0,

    },

    reducers: {

        addActiaveCategory: (state, action) => {
            state.activeCategoryName = action.payload['ТоварКатегорияНаименование'];
        },

        toggleToCompareList: (state, action) => {

            let element = action.payload;
            let newList = JSON.parse(JSON.stringify(state, undefined, 2)).comparisonList;
            let totalCol = JSON.parse(JSON.stringify(state, undefined, 2)).totalCol;

            if (newList.length === 0) {
                newList.push({ categoryName: element['ТоварКатегорияНаименование'], productList: [element] })
                //console.log(newList);
                totalCol++;
                state.totalCol = totalCol;
                state.comparisonList = newList;
                return;
            }



            const isFindCategory = newList.some(
                (e) => {

                   //console.log(e.categoryName)

                    //console.log(element['ТоварКатегорияНаименование'])

                    return e.categoryName === element['ТоварКатегорияНаименование']
                })

            if (!isFindCategory) {

                newList.push({ categoryName: element['ТоварКатегорияНаименование'], productList: [element] })
                //console.log(isFindCategory);

                //console.log("2");

                //console.log(newList);
                totalCol++;
                state.totalCol = totalCol;


                state.comparisonList = newList;
                return;

            }



            newList = newList.map((elem, index) => {

                if (elem.categoryName === element['ТоварКатегорияНаименование']) {

                    let isElementInArray = null;
                    elem.productList.forEach((e, index) => {
                        if (e['ТоварНаименование'] === element['ТоварНаименование'])
                            isElementInArray = index
                    })
                    //elem.productList.some((e) => e['ТоварНаименование'] === element['ТоварНаименование'])



                    if (isElementInArray !== null) {
                        elem.productList.splice(isElementInArray, 1);
                        totalCol--;
                        // state.totalCol = totalCol;
                    }
                    else {
                        elem.productList.push(element);
                        totalCol++;
                    }


                    return elem;


                }



                return elem;



            })

            //console.log(newList);
            state.totalCol = totalCol;
            state.comparisonList = newList;
            return;

        },

        delateCategory: (state, action) => {
            
            let categoryName = action.payload;
            let newList = JSON.parse(JSON.stringify(state, undefined, 2)).comparisonList;
            let totalCol = JSON.parse(JSON.stringify(state, undefined, 2)).totalCol;
            let indexCategory = null;
            let categoryColElem = null;


            newList.forEach((e, index) => {
                if (e.categoryName === categoryName) {
                    //console.log('>>>>>>>>>' + e.productList.length)
                    indexCategory = index;
                    categoryColElem = e.productList.length;
                }
            })

            state.totalCol = totalCol - categoryColElem;
            state.comparisonList.splice(indexCategory, 1)

        },

        setActiveCategoryNameDefault: (state, action) => {

            let comparisonList = JSON.parse(JSON.stringify(state, undefined, 2)).comparisonList;
           // console.log("activeCategoryName>>" + comparisonList[0].categoryName)
            let isFind = false;

            comparisonList.forEach(elem => {

                if (elem.productList.length !== 0 && isFind === false) {
                    isFind = !isFind;
                    state.activeCategoryName = elem.categoryName;
                    return;
                }
            })

        },

        setActiveCategoryName: (state, action) => {
            const newCategoryName = action.payload;
            //console.log(newCategoryName)

            state.activeCategoryName = newCategoryName;
        },


    }



})



export const {

    addActiaveCategory,
    toggleToCompareList,
    delateCategory,
    setActiveCategoryNameDefault,
    setActiveCategoryName,

} = comparisonSlice.actions;


export default comparisonSlice.reducer;