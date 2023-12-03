import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'store/advert/advertsSlice';
import { modalSelector } from 'store/advert/selectors';
import {
  Link,
  Accent,
  Backdrop,
  CloseButton,
  ConditionBox,
  Data,
  Description,
  Img,
  ModalBox,
  TopicHeader,
  Year,
  SecondBox,
  ConditionParag,
} from 'styles/App.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelector);
  const {
    id,
    img,
    make,
    model,
    year,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = modal;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  });

  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  });

  const handleClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };

  const [country, city] = address.split(', ').reverse().slice(0, 2);

  const [age] = rentalConditions.split('\n');

  const conditions = rentalConditions
    .split('\n')
    .slice(1, rentalConditions.split('\n').length);

  return createPortal(
    <Backdrop onClick={handleClose}>
      <ModalBox>
        <CloseButton onClick={() => dispatch(closeModal())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CloseButton>
        <Img src={img} width={461} />
        <Year style={{ marginBottom: '8px' }}>
          {make} <Accent>{model}</Accent>, {year}
        </Year>
        <SecondBox>
          <Data>{city}</Data>
          <Data> {country}</Data>
          <Data> Id: {id} </Data>
          <Data> Year: {year}</Data>
          <Data> Type: {type}</Data>
          <Data>Fuel Consumption: {fuelConsumption} </Data>
          <Data> Engine Size: {engineSize}</Data>
        </SecondBox>
        <Description>{description}</Description>
        <TopicHeader>Accessories and functionalities:</TopicHeader>
        <SecondBox>
          <Data>{accessories.join(' | ')}</Data>
          <Data>{functionalities.join(' | ')}</Data>
        </SecondBox>
        <TopicHeader>Rental Conditions:</TopicHeader>
        <ConditionBox>
          <ConditionParag>
            Minimum age :<Accent>{age.match(/\d/g).join('')}</Accent>
          </ConditionParag>
          {conditions.map((item, i) => (
            <ConditionParag key={i}>{item}</ConditionParag>
          ))}
          <ConditionParag>
            Mileage:
            <Accent>{Number(mileage).toLocaleString()}</Accent>
          </ConditionParag>
          <ConditionParag>
            Price:
            <Accent>{rentalPrice.replace('$', '') + '$'}</Accent>
          </ConditionParag>
        </ConditionBox>
        <Link href="tel:+380111111111">Rental car</Link>
      </ModalBox>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
