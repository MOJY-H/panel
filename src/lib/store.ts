import { configureStore } from '@reduxjs/toolkit'
// import userReducer from '@/lib/features/UserSlice'
import useLogin from '@/lib/features/loginSlice'


export const makeStore = () =>{
    return configureStore ({
        reducer : {
            login : useLogin
            // user : userReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>    
export type AppDispatch = AppStore['dispatch']