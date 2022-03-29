import { createSlice } from '@reduxjs/toolkit'


export const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryList: undefined,
        queryOutput: '',
    },
    reducers: {
        setCategory: (state,action) => {
            state.categoryList = action.payload;
        },
        setQueryOutput: (state,action) => {
            state.queryOutput = action.payload;
        }
        
    }
})

export const {setCategory,setQueryOutput} = categorySlice.actions;

export default categorySlice.reducer;
