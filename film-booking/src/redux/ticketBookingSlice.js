import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSelectedSeat: [],
  selectedFilm: undefined,
};

const ticketBookingSlice = createSlice({
  name: "ticketBookingSlice",
  initialState,
  reducers: {
    chooseSeat: (state, action) => {
      let cloneListSeat = [...state.listSelectedSeat];
      let index = cloneListSeat.findIndex((item) => item === action.payload);

      if (index === -1) {
        cloneListSeat.push(action.payload);
      } else {
        cloneListSeat = cloneListSeat.filter((item) => item !== action.payload);
      }
      state.listSelectedSeat = [...cloneListSeat];
    },
    chooseFilmForBooking: (state, action) => {
      
      state.selectedFilm = action.payload;
    },
  },
});

export const { chooseSeat, chooseFilmForBooking } = ticketBookingSlice.actions;

export default ticketBookingSlice.reducer;
