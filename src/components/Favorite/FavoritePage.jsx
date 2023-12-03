import AdvertItem from 'components/Adverts/AdvertItem';
import { useSelector } from 'react-redux';
import {
  errorSelector,
  favoriteSelector,
  isLoadingSelector,
} from 'store/advert/selectors';
import { Container, List, Loading, Title, Wrapper } from 'styles/App.styled';

const FavoritePage = () => {
  const favorite = useSelector(favoriteSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  return (
    <>
      <Container>
        <Wrapper>
          {isLoading && <Loading>Loading...</Loading>}
          {!error && favorite.length > 0 && (
            <List>
              {favorite.map(item => {
                return <AdvertItem key={item.id} data={item} />;
              })}
            </List>
          )}
          {favorite.length === 0 && (
            <Title>You don`t have favorite cars :(</Title>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default FavoritePage;
