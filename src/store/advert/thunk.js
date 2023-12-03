import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://656b0397dac3630cf72790c3.mockapi.io/api`;

const limit = 12;

const toNumber = str => {
  let numbers = str.match(/\d+/g);
  return Number(numbers ? numbers.join('') : '');
};

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { getState }) => {
    const {
      filter: { make, price, mileageFrom, mileageTo },
    } = getState().adverts;
    const params = {
      page: 1,
      limit,
      filter: make,
    };

    const response = await axios.get(`/adverts`, { params });
    let filteredData = [...response.data];

    if (mileageFrom && mileageTo !== '0') {
      const array = [...filteredData].filter(
        data =>
          data.mileage >= toNumber(mileageFrom) &&
          data.mileage <= toNumber(mileageTo)
      );
      filteredData = [...array];
    }
    if (price) {
      const array = [...filteredData].filter(
        data => toNumber(data.rentalPrice) <= price
      );
      filteredData = [...array];
    }
    return filteredData;
  }
);

export const paginate = createAsyncThunk(
  'cars/paginate',
  async (page, { getState }) => {
    const { make, price, mileageFrom, mileageTo } = getState().adverts.filter;

    const params = {
      page,
      limit,
      make,
      price,
      mileageFrom,
      mileageTo,
    };

    const response = await axios.get('/adverts', { params });
    return response.data;
  }
);
