import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, paginate } from './thunk';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    filter: {
      make: null,
      price: null,
      mileageFrom: null,
      mileageTo: null,
      makeOptions: [],
      priceOptions: [],
    },
    favorites: [],
    modal: null,
    isLoading: false,
    error: '',
  },

  reducers: {
    setPrice: (state, { payload }) => {
      state.filter = { ...state.filter, price: payload };
    },
    setMake: (state, { payload }) => {
      state.filter = { ...state.filter, make: payload };
    },
    setMakeOptions: (state, { payload }) => {
      state.filter = { ...state.filter, makeOptions: payload };
    },
    setPriceOptions: (state, { payload }) => {
      state.filter = { ...state.filter, priceOptions: payload };
    },
    setMileageFrom: (state, { payload }) => {
      state.filter = { ...state.filter, mileageFrom: payload };
    },
    setMileageTo: (state, { payload }) => {
      state.filter = { ...state.filter, mileageTo: payload };
    },
    openModal: (state, { payload }) => {
      state.modal = { ...payload };
    },
    closeModal: state => {
      state.modal = null;
    },
    addToFavorites: (state, action) => {
      if (!state.favorites.find(({ id }) => id === action.payload.id)) {
        state.favorites = [...state.favorites, action.payload];
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        ({ id }) => id !== action.payload
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.adverts = [...action.payload];

        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(paginate.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(paginate.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
        state.isLoading = false;
      })
      .addCase(paginate.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const {
  setPrice,
  setMake,
  setMileageFrom,
  setMileageTo,
  setMakeOptions,
  setPriceOptions,
  addToFavorites,
  removeFromFavorites,
  openModal,
  closeModal,
} = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
