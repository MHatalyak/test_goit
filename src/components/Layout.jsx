import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { useSelector } from 'react-redux';
import { modalSelector } from 'store/advert/selectors';
import Modal from './Modal/Modal';

export const Layout = () => {
  const modal = useSelector(modalSelector);
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {modal && <Modal />}
    </>
  );
};
