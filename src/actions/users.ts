import {Dispatch} from 'redux'
import {userNormalize, usersNormalize} from "../schemas/users";

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'


export function fetchUsers() {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: FETCH_USERS
        })
        const response = await fetch('/api/user/')
        const data = await response.json()

        dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: usersNormalize(data)
        })
    }
}

export function fetchUser(userId: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: FETCH_USERS
        })
        const response = await fetch(`/api/user/${userId}`)
        const data = await response.json()

        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: userNormalize(data)
        })
    }
}