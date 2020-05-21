import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Text } from 'components/common';
import LoginForm from 'components/login/Form';
import FeaturedPackages from 'components/login/FeaturedPackages';

import bannerImg1 from 'assets/images/login-banner-1.jpg';
import toucmoLogo from 'assets/images/toucmo-logo.png';

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  background: #fff;
  flex-direction: column;
`;

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  min-height: 750px;
  box-shadow: 0 2px 27px rgba(0, 0, 0, 0.22);
  margin-bottom: 10px;
`;

const BannerLogo = styled.div`
  cursor: pointer;
  width: 127px;
  height: 24px;
  background: url(${toucmoLogo}) no-repeat;
  background-size: contain;
`;

const BannerCarouselWrapper = styled.div`
  height: 100%;
  width: 767px;
  background: url(${bannerImg1}) center no-repeat;
  background-size: cover;
  padding: 50px 45px;
`;

const BannerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 48px;
  justify-content: space-between;
`;

const BannerHeader = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
`;

const BannerFooter = styled.div`
  display: flex;

  > a:first-child {
    margin-right: 5px;
  }

  > a:last-child {
    margin-left: 5px;
  }
`;

const LoginView = () => (
  <MainContainer>
    <Banner>
      <BannerContent>
        <BannerHeader>
          <BannerLogo />
          <Text variant="link-1" as={Link} to="/">Home</Text>
        </BannerHeader>
        <LoginForm />
        <BannerFooter>
          <Text variant="helper-2" as={Link} to="/privacy-policy">Privacy Policy</Text>
          <Text variant="helper-2"> &bull; </Text>
          <Text variant="helper-2" as={Link} to="/terms">Terms & Condition</Text>
        </BannerFooter>
      </BannerContent>
      <BannerCarouselWrapper>
        <Text variant="body-3" as="p">El Nido, Palawan</Text>
        <Text variant="body-1" style={{ color: '#fff' }}>Philippines</Text>
      </BannerCarouselWrapper>
    </Banner>
    <FeaturedPackages />
  </MainContainer>
);

export default LoginView;
