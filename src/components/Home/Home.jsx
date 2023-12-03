import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Title,
  ImageSlider,
  SubTitle,
} from 'styles/App.styled';
import imagesData from '../../data/images.json';

const Home = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <>
      <Container>
        {<Title>Welcome to CarFinder!</Title>}
        {
          <SubTitle>
            Find the perfect car for your taste and budget in just two clicks
          </SubTitle>
        }

        {
          <Slider {...sliderSettings}>
            {imagesData.map((image, index) => (
              <div key={index}>
                <ImageSlider src={image} alt={`Car ${index + 1}`} />
              </div>
            ))}
          </Slider>
        }

        {
          <Button type="button" onClick={handleClick}>
            Let's Start
          </Button>
        }
      </Container>
    </>
  );
};

export default Home;
