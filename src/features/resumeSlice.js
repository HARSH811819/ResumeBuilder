import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    resume:{
        name:"",
        email:""  
    }
}

const resumeSlice = createSlice({
    name:"Resume",
    initialState,
    reducers:{
        addName:(state,action)=>{
            state.resume.name = action.payload.toUpperCase();
            },
        addEmail:(state,action)=>{
            state.resume.email = action.payload;
        }
    }
})


export const{addEmail,addName} = resumeSlice.actions;
export default resumeSlice.reducer;

