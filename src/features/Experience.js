import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Experience: [
    {
      ExpId:nanoid(),
      company: "",
      profile:"",
      from: 0,
      To: 0,
      current:false,
      description: ""
    },
  
  ],
};

const ExperienceSlice = createSlice({
  name: "Experience",
  initialState,
  reducers: {
    addExperience: (state, action) => {
     state.Experience.push({
      ExpId:nanoid(),
      company:"",
      from:undefined,
      To:undefined,
      current:false,
      description:""

     })
 
    },
    removeExperience: (state, action) => {
      state.Experience = state.Experience.filter((experience)=> experience.ExpId != action.payload);
        
    },
    updateCompany:(state,action)=>{
        if(action.payload.company.trim()!=""){
          state.Experience = state.Experience.filter((exp)=>exp.ExpId === action.payload.ID?(exp.company = action.payload.company):exp)
        }
      },
      updateProfile:(state,action)=>{
          
          if(action.payload.profile.trim()!=""){
            state.Experience = state.Experience.filter((exp)=>exp.ExpId === action.payload.ID?(exp.profile = action.payload.profile):exp);
          }
      },
      updateFrom:(state,action)=>{
      if(action.payload.from.trim()!=""){
        state.Experience = state.Experience.filter((exp)=>exp.ExpId === action.payload.ID?(exp.from = action.payload.from):exp);
      }
      
    },
    updateTo:(state,action)=>{
      if(action.payload.To.trim()!=""){
        state.Experience = state.Experience.filter((exp)=>exp.ExpId === action.payload.ID?(exp.To = action.payload.To):exp);
      }
      
    },
    updateCurrent:(state,action)=>{
      
        state.Experience.filter((exp)=>exp.ExpId === action.payload?(exp.current = !exp.current):exp);
        state.Experience.filter((exp)=>exp.ExpId === action.payload?( exp.current? exp.To = "Currently Working":exp.To = 0):exp);
     
      
    },
    updateDesc:(state,action)=>{
      if(action.payload.description.trim()!=""){
        state.Experience = state.Experience.filter((exp)=>exp.ExpId === action.payload.ID?(exp.description = action.payload.description):exp);
      }

    }
  },
});

export const { addExperience, removeExperience,updateCompany,updateProfile,updateFrom,updateTo,updateCurrent,updateDesc } = ExperienceSlice.actions;
export default ExperienceSlice.reducer;
