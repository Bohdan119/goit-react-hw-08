import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout, } from "./operations";
import { currentOperation } from "../../redux/auth/operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email:null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            });
        
        builder
            .addCase(login.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            });
        
        builder
            .addCase(logout.fulfilled, (state) => {
            state.user = {
                name: null,
                email:null,
            }
            state.token = null;
            state.isLoggedIn = false;
            });
        
        builder
          .addCase(currentOperation.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
          })
          .addCase(currentOperation.rejected, (state) => {
            state.token = null;
          });
    }
})

export const authReducer = authSlice.reducer