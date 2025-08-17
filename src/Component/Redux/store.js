import { configureStore } from "@reduxjs/toolkit";
import { UserDetails } from "./userSlice";

const store = configureStore({reducer : {User : UserDetails}});
export default store;