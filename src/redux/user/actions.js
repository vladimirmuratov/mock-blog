import {fetchUsersApi} from "../../api/api";
import {DELETEUSER, FETCHUSERS, TOGGLECOLSIZE} from "./types";

export const fetchUsers = () => async dispatch => {
    const data = await fetchUsersApi()
    dispatch({
        type: FETCHUSERS,
        payload: data
    })
}

export const toggleColSize = () => ({
    type: TOGGLECOLSIZE
})

export const deleteUser = (id) => ({
    type: DELETEUSER,
    payload: id
})
