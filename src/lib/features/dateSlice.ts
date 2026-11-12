import { createSlice } from "@reduxjs/toolkit";


const dateSlice = createSlice({
    name :'date',
    initialState : {
        value : 0,
    },
    reducers : {
        ChechDate : (state , actions) => {
            state.value = actions.payload;
        }
    }
})

export default dateSlice.reducer