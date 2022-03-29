import { createSlice } from '@reduxjs/toolkit'


export const mainSlice = createSlice({


    name: "main",
    initialState: {
        allElements: [],

        mainElements: {},

    },

    reducers: {

        setAllElements: (state, action) => {

            state.allElements = action.payload;


        },
        addNewElement: (state, action) => {


            const elementList = JSON.parse(JSON.stringify(state, undefined, 2)).allElements;
            let newObject = JSON.parse(JSON.stringify(state, undefined, 2)).mainElements;
            let newArray = [];
            const query = action.payload;

            const isFindKey= query in newObject;


            if (!elementList||isFindKey) {
                return;
            }

            newObject[action.payload] = []

            elementList.forEach(element => {

                for (let key in element) {

                    const isString = (typeof element[key] == "string");

                    if (!isString) {
                        continue;
                    }

                    const elemToLowerCase = element[key].toLowerCase();
                    const queryToLowerCase = query.toLowerCase();
                    const isIndexOf = elemToLowerCase.indexOf(queryToLowerCase)

                    if (isIndexOf != -1) {
                        newArray.push(element)
                        break;
                    }

                }

            })


            //newObject[action.payload] = newArray.slice(0, 5);
            newObject[action.payload] = newArray;
            state.mainElements = newObject;
            /*
                        console.log(newObject)
                        console.log(elementList)
                        console.log("Добавление нового элемента")
            */
        }


    }

})

export const { setAllElements, addNewElement } = mainSlice.actions;


export default mainSlice.reducer;

