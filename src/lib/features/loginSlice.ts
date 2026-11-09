"use client"

import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
     value1 : '',
     value2 : ''
  },
  reducers: {
    checkUser : (state) => {
      localStorage.setItem("val1",state.value1='us');
    },
    checkAdmin: (state) => {
      localStorage.setItem("val1",state.value1='ad');  
    },
    checkVendor : (state) => {
      localStorage.setItem("val1",state.value1='ven');
    },
    checkUserPass : (state) => {
      localStorage.setItem("val2",state.value2='er');
    },
    checkAdminPass : (state) => {
      localStorage.setItem("val2",state.value2='min');
    },
    checkVendorPass : (state) => {
      localStorage.setItem("val2",state.value2='dor');
    }
  },
})

export default loginSlice.reducer
export const {checkUser , checkAdmin , checkVendor , checkUserPass , checkAdminPass ,checkVendorPass  } = loginSlice.actions