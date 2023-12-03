import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Form,
  Input,
  Name,
  Select,
} from '../../styles/App.styled';
import {
  makeOptionsSelector,
  makeSelector,
  mileageFromSelector,
  mileageToSelector,
  priceOptionsSelector,
  priceSelector,
} from 'store/advert/selectors';
import { fetchCars } from 'store/advert/thunk';
import { arrayOfPrices } from './helpers';
import {
  setMake,
  setMakeOptions,
  setMileageFrom,
  setMileageTo,
  setPrice,
  setPriceOptions,
} from 'store/advert/advertsSlice';
import { useEffect } from 'react';
import makesData from '../../data/makes.json';

const SearchForm = ({ setPage }) => {
  const make = useSelector(makeSelector);
  const price = useSelector(priceSelector);
  const mileageFrom = useSelector(mileageFromSelector);
  const mileageTo = useSelector(mileageToSelector);
  const makeOptions = useSelector(makeOptionsSelector);
  const priceOptions = useSelector(priceOptionsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMakeOptions(makesData));
    dispatch(setPriceOptions(arrayOfPrices(550)));
  }, [dispatch]);

  const handleMake = value => {
    dispatch(setMake(value));
  };
  const handlePrice = value => {
    dispatch(setPrice(value));
  };

  const handleSearch = () => {
    dispatch(setMake(make));
    dispatch(setPrice(price));
    dispatch(setMileageFrom(mileageFrom));
    dispatch(setMileageTo(mileageTo));
    fetchData();
  };

  const fetchData = () => {
    setPage(1);
    dispatch(fetchCars());
  };

  const handleEnter = ({ code }) => {
    if (code === 'Enter') return handleSearch();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEnter);

    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  });

  return (
    <Form>
      <div>
        <Name>Car Make</Name>
        <Select value={make || ''} onChange={e => handleMake(e.target.value)}>
          <option value="">Enter the text</option>
          {makeOptions.map(makeOption => (
            <option key={makeOption} value={makeOption}>
              {makeOption}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Name>Car Price</Name>
        <Select value={price || ''} onChange={e => handlePrice(e.target.value)}>
          <option value="">To $</option>
          {priceOptions.map(priceOption => (
            <option key={priceOption.value} value={priceOption.value}>
              {priceOption.label}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Name>Car mileage / km</Name>
        <Box>
          <Input
            placeholder="From"
            value={mileageFrom === null ? '' : mileageFrom}
            onChange={({ target }) => {
              const inputValue = target.value.replace(/[^0-9]/g, '');
              dispatch(
                setMileageFrom(
                  new Intl.NumberFormat('en-US').format(
                    Number(inputValue.toLocaleString('en-US'))
                  )
                )
              );
            }}
          />
          <Input
            placeholder="To"
            value={mileageTo === null ? '' : mileageTo}
            onChange={({ target }) => {
              const inputValue = target.value.replace(/[^0-9]/g, '');
              dispatch(
                setMileageTo(
                  new Intl.NumberFormat('en-US').format(
                    Number(inputValue.toLocaleString('en-US'))
                  )
                )
              );
            }}
          />
        </Box>
      </div>
      <Button onClick={handleSearch}>Search</Button>
    </Form>
  );
};

export default SearchForm;
