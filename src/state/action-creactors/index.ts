import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"
import { User } from "../interface/user"

export const addUser = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.AddUser,
            payload: user
        })
    }
}

export const deleteUser = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DeleteUser,
            payload: user
        })
    }
}

export const updateUser = (user: User) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UpdateUser,
            payload: user
        })
    }
}


