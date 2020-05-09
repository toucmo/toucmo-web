import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Text } from 'components/common';

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
`;

const BannerCarouselWrapper = styled.div`
  height: 100%;
  width: 767px;
  background: cyan;
`;

const BannerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 48px;
`;

const BannerHeader = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
`;

const LoginView = () => (
  <MainContainer>
    <Banner>
      <BannerContent>
        <BannerHeader>
          <Text category="title-1">TOUCMO</Text>
          <Text category="link-1" as={Link} to="/">Home</Text>
        </BannerHeader>
      </BannerContent>
      <BannerCarouselWrapper />
    </Banner>
  </MainContainer>
);

export default LoginView;
