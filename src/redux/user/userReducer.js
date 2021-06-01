import {DELETEUSER, FETCHUSERS, TOGGLECOLSIZE} from "./types";

const initialState = {
    users: [],
    colSize: '3'
}

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCHUSERS:
            return {
                ...state,
                users: action.payload
            }
        case TOGGLECOLSIZE:
            return {
                ...state,
                colSize: state.colSize === '3' ? '4' : '3'
            }
        case DELETEUSER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state
    }
}