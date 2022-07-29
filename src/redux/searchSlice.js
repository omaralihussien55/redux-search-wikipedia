import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const  search =createAsyncThunk("search",async (agrs,thunkapi)=>{
    const {rejectWithValue,getState} = thunkapi
      
try{
    const respond = await axios.get(`https://${agrs.lang? 'ar':'en'}.wikipedia.org/w/api.php`,{
        params:{
           action:"query",
           list :"search",
           origin:"*",
           format:"json",
           srsearch:`${agrs.ser}`
        }
       
        })
        return respond.data.query.search
}catch(error){
 return rejectWithValue(error.message)
}
})


export const serachSlice = createSlice({
    name:"search",
    initialState:{
    data:[],
    success:false,
    error:false,
    empty:false,
    errorContent:"",
    lang:true
    },
    reducers:{
        changeLang:(state,action)=>{
            state.lang = action.payload
        }
    },

    extraReducers:{
[search.pending]:(state,action)=>{
state.success = true
state.error= false
state.empty = false
},
[search.fulfilled]:(state,action)=>{
    state.success = false
    state.error= false
    state.data = action.payload
    if(action.payload.length <= 0){
        state.empty = true
    }
      
},
[search.rejected]:(state,action)=>{
    state.success = false
    state.error= true
    state.errorContent = action.payload
    
}

    }
    
})

export const {changeLang} = serachSlice.actions

export default serachSlice.reducer