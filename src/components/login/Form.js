import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import mailIcon from 'assets/icons/mail.png';
import lockIcon from 'assets/icons/lock.png';
import eyeIcon from 'assets/icons/eye.png';

import {
  Text,
  InputField,
  Button,
  Checkbox,
} from 'components/common';

const MainContainer = styled.div`
  width: 350px;
  align-self: center;
`;

const FieldsContainer = styled.form`
  margin: 30px 0;
`;

const FieldIcon = styled.span`
  display: block;
  height: 24px;
  width: 18px;
  background: url(${({ img }) => img}) no-repeat center center;
`;

const FieldWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const ButtonWrapper = styled.div`
  width: 165px;
  display: flex;
  align-items: center;
`;

const LoginOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 45px;
`;

const LoginOption = styled.div`
  height: 32px;
  width: 32px;
  cursor: pointer;
  margin: 0 6px;

  > i {
    font-size: 32px;
    line-height: 1;
  }
`;

const LoginForm = () => {
  const [isPasswordShown, setPasswordDisplay] = useState(false);
  return (
    <MainContainer>
      <Text variant="helper-1">
        START YOUR TRAVEL PLANS WITH OUR PACKAGES
      </Text>
      <Text variant="title-1" as="p" style={{ marginTop: 10 }}>
        Sign in to your account
      </Text>
      <FieldsContainer>
        <FieldWrapper>
          <InputField placeholder="E-mail Address" leftIcon={() => <FieldIcon img={mailIcon} />} />
        </FieldWrapper>
        <FieldWrapper>
          <InputField
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password"
            leftIcon={() => <FieldIcon img={lockIcon} />}
            rightIcon={() => <FieldIcon img={eyeIcon} onClick={() => setPasswordDisplay(!isPasswordShown)} />}
          />
        </FieldWrapper>
        <FieldWrapper>
          <ButtonWrapper>
            <Button variant="secondary">Register</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button variant="primary">Sign In</Button>
          </ButtonWrapper>
        </FieldWrapper>
        <FieldWrapper>
          <ButtonWrapper>
            <Checkbox id="remember-me" name="remember-me" style={{ marginRight: 8 }} />
            <Text variant="caption-1" htmlFor="remember-me" as="label">Remember me</Text>
          </ButtonWrapper>
          <ButtonWrapper>
            <Text as={Link} to="/forgot-password" variant="caption-1">
              Forgot your password?
            </Text>
          </ButtonWrapper>
        </FieldWrapper>
      </FieldsContainer>
      <LoginOptionsContainer>
        <Text variant="helper-1">OR LOGIN USING</Text>
        <LoginOption>
          <i className="fi flaticon-facebook" style={{ color: '#1776d3' }} />
        </LoginOption>
        <LoginOption>
          <i className="fi flaticon-twitter" style={{ color: '#07a9f4' }} />
        </LoginOption>
        <LoginOption>
          <i className="fi flaticon-github" />
        </LoginOption>
      </LoginOptionsContainer>
      <Text as={Link} to="/partner-signin" variant="body-2" style={{ textDecoration: 'underline' }}>
        PARTNER SIGN IN
      </Text>
    </MainContainer>
  );
};

export default LoginForm;
