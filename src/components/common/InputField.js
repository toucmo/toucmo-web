import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position }) => `${position}: 15px;`}
`;

const Input = styled.input`
  height: 40px;
  line-height: 40px;
  width: 100%;
  border: 1px solid #989898;
  border-radius: 5px;
  background: #fff;
  outline: 0;
  padding: 0 15px;
  font-size: 14px;
  ${({ leftIcon }) => (leftIcon && 'padding-left: 45px;')}
  ${({ rightIcon }) => (rightIcon && 'padding-right: 45px;')}

  &:focus {
    border-color: #212121;
  }

  &::placeholder {
    color: #989898;
  }
`;

const InputField = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props
}) => (
  <Container>
    <Input {...props} leftIcon={!!LeftIcon} rightIcon={!!RightIcon} />
    {LeftIcon && (<IconWrapper position="left"><LeftIcon /></IconWrapper>)}
    {RightIcon && <IconWrapper position="right"><RightIcon /></IconWrapper>}
  </Container>
);

export default InputField;
