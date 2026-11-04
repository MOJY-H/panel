import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : "lang",
    initialState : {
        language: 'en'
    },
    reducers : {
        changeLangEn : (state) => {
            state.language = 'en'
        },
        changeLangFa : (state) => {
            state.language = 'fa'
        }
    }
});

export default userSlice.reducer;

