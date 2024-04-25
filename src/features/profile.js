import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    
    profile:{
        profileId:nanoid(),
        src:""

    }
}

const ProfileSlice = createSlice({
    name:"ProfileImage",
    initialState,
    reducers:{
        updateSrc:(state,action)=>{
            state.profile.src = action.payload
        }
    }

})

export default ProfileSlice.reducer;
export const{updateSrc} = ProfileSlice.actions;