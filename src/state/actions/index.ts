import { ActionType } from "../action-types/index"
import { User } from "../interface/user";

interface DepositAction {
    type: ActionType.AddUser,
    payload: User
}

interface WithdrawAction {
    type: ActionType.DeleteUser,
    payload: User
}
interface updateUser {
    type: ActionType.UpdateUser,
    payload: User
}




export type Action = DepositAction | WithdrawAction|updateUser ;