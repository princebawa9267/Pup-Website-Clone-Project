import {createSlice} from "@reduxjs/toolkit"

const UserData = createSlice({
    name : "userDetail",
    initialState : {
        login : false,
        user : null,
        Role : null,
        SubjectTeacher : null,
        FirstName : null,
        LastName : null,
        UniqueId : null,
        EmailId : null,
        Gender : null,
    },
    reducers :
    {
        dataAvailable : (state , action ) =>
        {
            state.login = true;
            console.log("Data loaded into redux using local storage")
            state.user = action.payload;
            state.Role = action.payload.Role;
            state.FirstName = action.payload.FirstName;
            state.LastName = action.payload.LastName;
            state.UniqueId = action.payload.UniqueId;
            state.EmailId = action.payload.Email;
            state.Gender = action.payload.Gender;
            if(action.payload.Role == 1)
            {
                state.SubjectTeacher = action.payload.Subject
            }
            console.log("Hello data available with redux")
        },
        login : (state,action) =>
        {
            state.user = action.payload;
            state.login = true;
            state.Role = action.payload.Role;
            state.FirstName = action.payload.FirstName;
            state.LastName = action.payload.LastName;
            state.UniqueId = action.payload.UniqueId;
            state.EmailId = action.payload.Email;
            state.Gender = action.payload.Gender;
            if(action.payload.Role == 1)
            {
                state.SubjectTeacher = action.payload.Subject
            }
            localStorage.setItem("User", JSON.stringify(action.payload));
        },
        changeFirstName : (state,action) =>
        {
            state.FirstName = action.payload;
        },
        changeLastName : (state,action) =>
        {
            state.LastName = action.payload;
        },
        logOut : (state) =>
        {
            localStorage.clear();
            state.user = null;
            state.login = false;
            state.Role = null;
            state.SubjectTeacher = null;
            state.FirstName = null;
            state.LastName = null;
            state.UniqueId = null;
            state.EmailId = null;
            state.Gender = null
        }
    }
})

export const {login, logOut,dataAvailable,changeFirstName,changeLastName} = UserData.actions;

export const UserDetails = UserData.reducer;