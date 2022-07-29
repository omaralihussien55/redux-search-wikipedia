import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../redux/searchSlice";

const store = configureStore({
reducer:{
   arr: searchSlice
}
})

export default store