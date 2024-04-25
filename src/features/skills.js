import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    Skills:[
     
    ]
}

const skillSlice = createSlice({
    name:"skills",
    initialState,
    reducers:{
       
        addSkill:(state,action)=>{
            if(action.payload.trim() !=""){

                state.Skills.push({
                    skillId:nanoid(),
                    Skill:action.payload
                })
            }
        },
        removeSkill:(state,action)=>{
            state.Skills = state.Skills.filter((skill)=> skill.skillId != action.payload)
        }
    }
})

export const{addSkill,removeSkill} = skillSlice.actions;
export default skillSlice.reducer