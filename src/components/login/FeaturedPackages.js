import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import { Text } from 'components/common/';

const MainContainer = styled.div`
  width: 100%;
  padding: 60px 98px 0;
`;

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  centerPadding: '100px',
};

const Card = styled.div`
  height: 273px;
  background: cyan;
`;

const FeaturedPackages = () => (
  <MainContainer>
    <Text variant="title-1">Featured Tour Packages</Text>
    <Slider {...sliderSettings}>
      <Card />
      <Card />
      <Card />
    </Slider>
  </MainContainer>
);

export default FeaturedPackages;
