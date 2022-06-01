
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const arr = createSlice({
  name: "list",
  initialState: { num: '',data:[] },
  reducers: {
    action(state, action) {
      // console.log(action.payload.val.data.data);
      state.num = action.payload.val.data.number;
      state.data = action.payload.val.data.data;
 
    },
  },
});



const store = configureStore({
  reducer: {
    arr: arr.reducer,
 
  },
});

export const { action } = arr.actions;



export default store;