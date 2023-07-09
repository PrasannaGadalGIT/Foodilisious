import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  //state where token with empty state
  token : '',
  id : '',
  role : '',
  menue : ''
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
   setMenue: (state, actions) => {
    return {
      ...state,
      menue : actions.payload.menue
    }
   }

  }
  });

export const { setUserDetails, resetUser, setMenue} = UserSlice.actions;
export default UserSlice.reducer;
