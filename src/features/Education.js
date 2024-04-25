import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Education: [
    {
      EduId:nanoid(),
      class: "",
      stream: "",
      college: "",
      marks: 100,
      year: undefined,
    },
 
  ],
};

const EducationSlice = createSlice({
  name: "Education",
  initialState,
  reducers: {
    addEducation: (state, action) => {
     state.Education.push({
      EduId:nanoid(),
      class:"",
      stream:"",
      college:"",
      marks:undefined,
       year:undefined
    })
      
    },
    removeEducation: (state, action) => {
      state.Education = state.Education.filter((edu)=>edu.EduId != action.payload)
      
    },
    upadteClass:(state,action)=>{
      if(action.payload.class != "" || action.payload.class.trim() != ""){
        state.Education =  state.Education.filter((edu)=>edu.EduId === action.payload.ID?(edu.class = action.payload.class):edu)
      }
    },
    updateStream:(state,action) =>{
      if(action.payload.stream != "" || action.payload.stream.trim() != ""){
        state.Education =  state.Education.filter((edu)=>edu.EduId === action.payload.ID?(edu.stream = action.payload.stream):edu)
      }
      
      
    },
    updateCollege:(state,action)=>{
      if(action.payload.college != "" || action.payload.college.trim() != ""){
        state.Education =  state.Education.filter((edu)=>edu.EduId === action.payload.ID?(edu.college = action.payload.college):edu)
      }
    },
    updateMarks:(state,action) =>{
      if(action.payload.marks != "" || action.payload.marks.trim() != ""){
        state.Education =  state.Education.filter((edu)=>edu.EduId === action.payload.ID?(edu.marks = action.payload.marks):edu)
      }
    },
    updateYear:(state,action) =>{
      if(action.payload.year != "" || action.payload.year.trim() != ""){
        state.Education =  state.Education.filter((edu)=>edu.EduId === action.payload.ID?(edu.year = action.payload.year):edu)
      }
    }

  },
});

export const { addEducation, removeEducation,upadteClass,updateStream,updateCollege,updateMarks,updateYear } = EducationSlice.actions;
export default EducationSlice.reducer;

