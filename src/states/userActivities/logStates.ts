import { RootState } from "@/configs/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type ActionTypes = "succes login" | "failed login" | "logout" | "changed language" | "fetch users"

const ActionDetails: Record<ActionTypes, string> = {
    "succes login": "log - login success",
    "failed login": "log - login failed",
    "logout": "log - logout success",
    "changed language": "log - changed language",
    "fetch users": "log - fetch user list"
}

export type UserLogs = {
    key: number; 
    logType: ActionTypes;
    logDetails: string;
    logTime: string
}

export interface ILogState {
    actions: UserLogs[];
}

const initialState: ILogState = {
    actions: []
};

export const logSlice = createSlice({
    name: "logState",
    initialState,
    reducers: {
        addUserLogs: (state, action: PayloadAction<ActionTypes>) => {
            state.actions.push({
                key: Date.now(),
                logType: action.payload,
                logDetails: ActionDetails[action.payload],
                logTime: new Date().toLocaleString()
            })
        },
    },
});

export const { addUserLogs } = logSlice.actions;

export const selectorUserLogs = (state: RootState) => state.logSlice;

export default logSlice.reducer;
