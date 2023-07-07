import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  //state where token with empty state
  token : '',
  id : '',
  role : ''
};

const UserSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      return {
        ...state,
        token: actions.payload.token,
        id : actions.payload.id,
        role : actions.payload.role,
        email : actions.payload.email
      }
    },
    //resetin the token to the null state
    resetUser:  (state, actions) => {
      return {...initialState}
   },


  }
  });

export const { setUserDetails, resetUser} = UserSlice.actions;
export default UserSlice.reducer;
