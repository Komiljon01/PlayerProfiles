import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  filtersLoadingStatus: "success",
  activeFilter: "All",
  filteredPlayers: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersFetching: (state) => {
      state.filtersLoadingStatus = "loading";
    },
    filtersFetched: (state, action) => {
      state.filtersLoadingStatus = "success";
      state.filters = action.payload;
    },
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
    filtersFetchingError: (state) => {
      state.filtersLoadingStatus = "error";
    },
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const {
  filtersFetching,
  filtersFetched,
  activeFilterChanged,
  filtersFetchingError,
} = actions;
