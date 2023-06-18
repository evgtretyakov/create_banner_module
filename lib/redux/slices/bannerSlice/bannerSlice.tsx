import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ReduxState} from "@/lib/redux";
import {appendFile} from "fs";

export interface BannerOption {
    label: string,
    value: string
}

export interface BannerSliceState {
    title: string,
    desc: string,
    type: BannerOption | null,
    view: BannerOption | null,
    background: appendFile | ""
}

export type changeInput = {
    name: string;
    value: string;
}

const initialState: BannerSliceState = {
    title: "",
    desc: "",
    type: {
        label: "Strawberry",
        value: "strawberry"
    },
    view: {
        label: "Chocolate",
        value: "chocolate"
    },
    background: ""
}

export const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
        changeInput: (state: BannerSliceState, action: PayloadAction<changeInput>) => {
            if (action?.payload?.name && action.payload.value) {
                state[action.payload.name] = action.payload.value
            }
        }
    },
    extraReducers: builder => {
        builder
        // .addCase(someAsync.pending, (state) => {
        //     state.loading = true
        // })
        // .addCase(someAsync.fulfilled, (state, action) => {
        //     state.loading = false
        //     state.value = action.payload
        // })
    }
})

export const {
    changeInput
} = bannerSlice.actions

export const selectBanner = (state: ReduxState) => state.banner
