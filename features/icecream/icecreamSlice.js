const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    numOfIcecream: 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers:{
        ordered: (state) =>{
            state.numOfIcecream--
        },
        restocked: (state, action)=>{
            state.numOfIcecream += action.payload
        }
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamAction = icecreamSlice.actions