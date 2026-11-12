"use client"

import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
     value1 : '',
     value2 : ''
  },
  reducers: {
    CheckUser : (state) => {
      
        localStorage.setItem("val1",state.value1='us');
      
    },
    CheckAdmin: (state) => {
      
        localStorage.setItem("val1",state.value1='ad');  
      
    },
    CheckVendor : (state) => {
      
        localStorage.setItem("val1",state.value1='ven');
      
    },
    CheckUserPass : (state) => {
      
        localStorage.setItem("val2",state.value2='er');
      
    },
    CheckAdminPass : (state) => {
      
        localStorage.setItem("val2",state.value2='min');
      
    },
    CheckVendorPass : (state) => {
      
        localStorage.setItem("val2",state.value2='dor');
      
    }
  },
})

export default loginSlice.reducer
export const {CheckUser , CheckAdmin , CheckVendor , CheckUserPass , CheckAdminPass ,CheckVendorPass  } = loginSlice.actions