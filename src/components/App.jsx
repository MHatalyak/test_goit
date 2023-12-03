import React, { Suspense, lazy} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Home/HomePage';
import { Title } from 'styles/App.styled';
import { Layout } from './Layout';

const AdvertsPage = lazy(() => import(`./Adverts/AdvertsPage`));
const FavoritePage = lazy(() => import(`./Favorite/FavoritePage`));

const App = () => {

  return (
    <div>
      <Suspense fallback={<Title>Loading...</Title>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Layout />}>
            <Route index element={<AdvertsPage />} />
          </Route>
          <Route path="/favorites" element={<Layout />}>
            <Route index element={<FavoritePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
