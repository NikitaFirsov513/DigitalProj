import { createSlice } from '@reduxjs/toolkit'
import categorySlice from './categorySlice';


export const cardSlice = createSlice({
    name: "card",
    initialState: {
        cardList: [],
        totalPrice: 0,
    },
    reducers: {

        addToCard: (state, action) => {

            let list = action.payload;
            //action.payload['Количество']=1;
            console.log(list)
            //list.kol=1;
            state.cardList.push({ ...list, "Количество": 1, "Сумма": list['Цена'] });
            console.log(JSON.parse(JSON.stringify(state, undefined, 2)).cardList)
        },
        cahangeTotalPrice: (state, action) => {
            let newCardList = JSON.parse(JSON.stringify(state, undefined, 2)).cardList;
            let totalPrice = 0;

            newCardList.forEach((element, index) => {
                totalPrice += element['Сумма'];
            })

            state.totalPrice = totalPrice;

        },
        addKol: (state, action) => {

            //console.log("sdasdasd")
            let newCardList = JSON.parse(JSON.stringify(state, undefined, 2)).cardList;
            const element = action.payload;
            const elementName = element['ТоварНаименование'];
            //let indexElement = null;

            newCardList.forEach((element, index) => {

                if (
                    element['ТоварНаименование'] == elementName &&
                    element['КоличествоОстаток'] > element['Количество']
                ) {
                    console.log("add")
                    element['Количество']++;
                    element['Сумма'] = element['Количество'] * element['Цена']
                }
            })
            state.cardList = newCardList;

        },
        difKol: (state, action) => {

            let newCardList = JSON.parse(JSON.stringify(state, undefined, 2)).cardList;
            const element = action.payload;
            const elementName = element['ТоварНаименование'];
            //let indexElement = null;

            newCardList.forEach((element, index) => {
                if (
                    element['ТоварНаименование'] == elementName &&
                    element['Количество'] > 1
                ) {

                    element['Количество']--;
                    element['Сумма'] = element['Количество'] * element['Цена'];


                }
            })
            state.cardList = newCardList;

        },
        delateFromCard: (state, action) => {

            let newCardList = JSON.parse(JSON.stringify(state, undefined, 2)).cardList;
            const element = action.payload;
            const elementName = element['ТоварБрендНаименование'];
            let indexElement = null;

            newCardList.forEach((e, index) => {
                if (e['ТоварНаименование'] == element['ТоварНаименование']) {
                    indexElement = index;
                }
            })
            console.log(element)

            console.log(elementName)
            console.log(indexElement)
            newCardList.splice(indexElement, 1)

            state.cardList = newCardList;
            console.log(newCardList)
        },


    }

})

export const {
    addKol,
    cahangeTotalPrice,
    difKol,
    addToCard,
    delateFromCard,
} = cardSlice.actions;

export default cardSlice.reducer

