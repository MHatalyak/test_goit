import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  advertsSelector,
  errorSelector,
  isLoadingSelector,
} from 'store/advert/selectors';
import { fetchCars, paginate } from 'store/advert/thunk';
import { Container, List, ButtonMore, Loading, Title } from 'styles/App.styled';
import AdvertItem from './AdvertItem';
import SearchForm from 'components/Search/SearchForm';

const AdvertsList = () => {
  const [page, setPage] = useState(1);
  const adverts = useSelector(advertsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  useEffect(() => {
    page > 1 && dispatch(paginate(page));
  }, [dispatch, page]);

  return (
    <>
      <Container>
        <SearchForm setPage={setPage} />
        {isLoading && <Loading>Loading...</Loading>}
        {!error && adverts.length > 0 && (
          <List>
            {adverts.map(item => {
              return <AdvertItem key={item.id} data={item} />;
            })}
          </List>
        )}
        {adverts.length === 0 && (
          <Title>Something went wrong, try again :(</Title>
        )}
        <ButtonMore type="button" onClick={handleLoadMore}>
          Load More
        </ButtonMore>
      </Container>
    </>
  );
};

export default AdvertsList;
