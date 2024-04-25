import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    size:1,
    ContactNo:[
        {
            NoId:nanoid(),
            No:99999999,

        },
        {
            NoId:nanoid(),
            No:99999999,

        }
       
    ]
}

const ContactSlice = createSlice({
    name:"Contacts",
    initialState,
    reducers:{
        addContact:(state,action)=>{

            state.ContactNo = state.ContactNo.filter((contact)=>{
                if(contact.NoId === action.payload.ID){
                    contact.No = action.payload.No
                    return contact;
                }else{
                    return contact
                }
            })
          
        },
        removeContact:(state,action)=>{
            state.ContactNo = state.ContactNo.filter((contact)=>contact.NoId != action.payload)
            state.size--;
            
        },
        pushContact:(state,action)=>{
            state.ContactNo.push({NoId:nanoid(),No:undefined})
            state.size++;
        }
    }

})

export default ContactSlice.reducer;
export const{addContact,removeContact,pushContact} = ContactSlice.actions;