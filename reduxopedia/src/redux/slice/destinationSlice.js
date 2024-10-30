import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong Kong",
      },
      {
        name: "Japan",
      },
      {
        name: "Old Zealand",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
    },
  },
});

export const { destinationClicked } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
