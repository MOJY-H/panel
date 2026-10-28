import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
     value1 : '',
     value2 : ''
  },
  reducers: {
    checkUser : (state) => {
      state.value1 = 'us'
    },
    checkAdmin: (state) => {
      state.value1 = 'ad'
    },
    checkVendor : (state) => {
      state.value1 = 'ven'
    },
    checkUserPass : (state) => {
      state.value2 = 'er'
    },
    checkAdminPass : (state) => {
      state.value2 = 'min'
    },
    checkVendorPass : (state) => {
      state.value2 = 'dor'
    }
  },
})

export default loginSlice.reducer
export const {checkUser , checkAdmin , checkVendor , checkUserPass , checkAdminPass ,checkVendorPass  } = loginSlice.actions