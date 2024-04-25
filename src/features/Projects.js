import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    Projects:[
        {
            projectId:nanoid(),
            projectname:"",
            Domain:"",
            Details:"",
            ProjectLink:""
        }
    ]
}

const ProjectSlice = createSlice({
    name:"Projects",
    initialState,
    reducers:{
        addProject:(state,action)=>{
            state.Projects.push({
                projectId:nanoid(),
                projectname:"",
                Domain:"",
                Details:"",
                ProjectLink:undefined
            })
        },
        removeProject:(state,action)=>{
              state.Projects = state.Projects.filter((project)=>project.projectId != action.payload);
        },
        updateProjectName:(state,action)=>{
            if(action.payload.name.trim() != ""){

                state.Projects = state.Projects.filter((project)=>project.projectId === action.payload.ID?(project.projectname = action.payload.name):project)
            }
        },
        updateDomain:(state,action) =>{
            if(action.payload.Domain.trim() != ""){
                state.Projects = state.Projects.filter((project)=>project.projectId === action.payload.ID?(project.Domain = action.payload.Domain):project)
                
            }
        },
        updateDetails:(state,action)=>{
            if(action.payload.Detail.trim() != ""){
                state.Projects = state.Projects.filter((project) => project.projectId === action.payload.ID?(project.Details = action.payload.Detail):project)
            }
        },
        updateProjectLink:(state,action)=>{
         
            if(action.payload.Link.trim() != ""){
                state.Projects = state.Projects.filter((project) => project.projectId === action.payload.ID?(project.ProjectLink = action.payload.Link):project)
            }
            
        }
    }
})


export const{addProject,removeProject,updateProjectName,updateDomain,updateDetails,updateProjectLink} = ProjectSlice.actions;
export default ProjectSlice.reducer;

