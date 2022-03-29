import { createSlice } from '@reduxjs/toolkit'


export const productAllSlice = createSlice({
    name:"productAll",
    initialState:{
        productAllList:undefined,
    },
    reducers:{

        setProductAll:(state,action)=>{
            state.productAllList = action.payload;

        }
    }

})

export const {setProductAll} = productAllSlice.actions;

export default productAllSlice.reducer;