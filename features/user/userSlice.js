const axios = require('axios')
const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk

const fetchUsers = createAsyncThunk("user/fetchUsers", ()=>{
  return  axios.get("https://picsum.photos/v2/list")
  .then((response )=> response.data.map((user) => user.id))
})

const initialState = {
    loading: false,
    users:[],
    error: ""
}


const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder =>{
        builder.addCase(fetchUsers.pending, state =>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,( state, action)=>{
            state.loading = false,
            state.users = action.payload,
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false,
            state.users = []
            state.error = action.error.message
        })
    }
})




module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers