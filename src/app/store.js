import {configureStore} from "@reduxjs/toolkit";
import resumeReducer from '../features/resumeSlice';
import EducationReducer from '../features/Education';
import ExperienceReducer from '../features/Experience';
import ProjectReducer from '../features/Projects'
import SkillReducer from '../features/skills'
import ContactReducer from '../features/ContactNo'
import ProfileReducer from '../features/profile'

 const store = configureStore({
     reducer:{
         Resume:resumeReducer,
         Education:EducationReducer,
         Experiences:ExperienceReducer,
         Projects:ProjectReducer,
         Skills:SkillReducer,
         Contacts:ContactReducer,
         Profile:ProfileReducer
     
     }
    
})
export default store;