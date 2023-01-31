import { ActionType } from "../action-types/index";
import { Action } from "../actions";
import { User } from "../interface/user";

const initialState = [
  {
    id: "1",
    name: "doron",
    email: "dorodd@gmail.com",
    age: 30,
  },
  {
    id: "2",
    name: "doron1",
    email: "doron@gmail.com",
    age: 33,
  },
];

const reducer = (state: User[] = initialState, action: Action): User[] => {
  switch (action.type) {
    case ActionType.AddUser:
      return [...state, action.payload];

    case ActionType.DeleteUser:
      return state.filter((state) => state.name !== action.payload.name);

    case ActionType.UpdateUser:
      // state.find((user) => {
      //   if (user.id === action.payload.id) {
      //     user = action.payload;
      //   }
      // });
      // console.log("Statee", state);
      // return state;
    return state.map((user) => {
      if (user.id === action.payload.id) {
        return {
          ...user,
          ...action.payload,
        };
      } else {
        return user;
      
      }
    });

    // return{
    //     state.map((user)=>user.name===action.payload.name ? user=action.payload:user
    //     )

    default:
      return state;
  }
};

export default reducer;
