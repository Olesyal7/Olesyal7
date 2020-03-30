import {FETCH_USERS_SUCCESS, FETCH_USERS, FETCH_USER_SUCCESS} from '.././actions/users'
import {IUser, IUserState} from "../react-app-env";

const initialState: IUserState = {
    userList: [],
    users: {}
}

interface IAction {
    type: string
    payload: {
        result: number[] | number
        entities: {user: {[key: number]: IUser}}
    }
}

export default function (state=initialState, action: IAction) {
    switch(action.type) {
        case FETCH_USERS:
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                users: {
                    ...state.users,
                    ...action.payload.entities.user
                },
                placeList: [action.payload.result as number],
                isLoading: false
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.entities.user,
                userList: action.payload.result as number[]
            }
    }
    return state
}