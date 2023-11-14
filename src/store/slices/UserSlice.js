import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
            console.log("state",state);
            console.log("action.payload",action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1);
            console.log(state);
        },
        deleteUsers(state,action){
            console.log("got clicked");
            return [];
        }

    },


}


);
console.log("userSlice.reducer",userSlice.reducer);
console.log("userSlice.actions",userSlice.actions);
export default userSlice;
export const {addUser,removeUser,deleteUsers} = userSlice.actions;