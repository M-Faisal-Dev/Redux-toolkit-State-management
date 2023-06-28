import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

// STATUSES object will be work like a enum 

export const STATUSES = Object.freeze({
    IDLE : "idle",
    ERROR : "error",
    LOADING : "loading",
})



const productSlice = createSlice({
    name: "product",
    initialState : {
        data : [],
        status: STATUSES.IDLE,
    },
    // reducers: {
    //     setProduct(state,action){
    //        state.data = action.payload
    //     },
    //     setStatus(state, action){
    //         state.status = action.payload
    //     }
    // }


    extraReducers:(builder)=>{
    builder
    .addCase(fetchProduct.pending, (state, action)=>{
        state.status = STATUSES.LOADING
    })
    .addCase(fetchProduct.fulfilled, (state, action)=>{
        state.data = action.payload
        state.status = STATUSES.IDLE
    })
    .addCase(fetchProduct.rejected, (state, action)=>{
        state.status = STATUSES.ERROR
    })
    }

})

export const{setProduct,setStatus} = productSlice.actions;

export default productSlice.reducer;


// api call yani side effect vagara k leya ham thunks middleware koo use krty han 
// thunk k under ham function mai sy function ko return krty han 


// export function fetchProduct(){
//     // es function k under ham koo 2 parameter milty han 
//     // 1. dispatch
//     // 2. getState
// return async function fetchProductThunk(dispatch, getState){
//     dispatch(setStatus(STATUSES.LOADING))
// try{
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     dispatch(setProduct(data))
//     dispatch(setStatus(STATUSES.IDLE))
// }catch (error){
// console.log(error);
// dispatch(setStatus(STATUSES.ERROR))

// }
// }
// }

// more way to use thunk 

// createAsyncThunk b two parameter hota ha 
// 1. identifier es mai ap koch b parameter mai daa sakty hoo 
// 2. async function 

export const fetchProduct = createAsyncThunk('product/fatching', async function(){
   const response = await fetch('https://fakestoreapi.com/products');
   const data = await response.json();
 return data
})