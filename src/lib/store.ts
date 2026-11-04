import { configureStore } from '@reduxjs/toolkit'
// import userReducer from '@/lib/features/UserSlice'
import useLogin from '@/lib/features/loginSlice'
import useLang from '@/lib/features/langSlice'

export const makeStore = () =>{
    return configureStore ({
        reducer : {
            login : useLogin,
            lang : useLang,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>    
export type AppDispatch = AppStore['dispatch']