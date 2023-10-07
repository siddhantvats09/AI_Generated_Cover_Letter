import { createSlice } from "@reduxjs/toolkit";

const clcontent=createSlice({
    name : "content",
    initialState:'',
    reducers:{
        addcontent(state,action){
            console.log(action.payload)
            state=state.replace(state,"")
           return state.concat(action.payload)
        },
    }
})


export const {addcontent} =clcontent.actions;
export default clcontent.reducer ;