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
  ${({ clickable }) => (clickable ? `cursor: pointer;` : `pointer-events: none;`)}
  background: url(${({ icon }) => icon}) no-repear center center;
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
  ${({ hasLeftIcon }) => (hasLeftIcon && `padding-left: 45px;`)}
  ${({ hasRightIcon }) => (hasRightIcon && `padding-right: 45px;`)}

  &:focus {
    border-color: #212121;
  }

  &::placeholder {
    color: #989898;
  }
`;

const InputField = ({
  leftIcon,
  hasLeftIcon,
  rightIcon,
  hasRightIcon,
  ...props
}) => (
  <Container>
    <Input {...props} />
    {hasLeftIcon && <IconWrapper icon={leftIcon} position="left" />}
    {hasRightIcon && <IconWrapper icon={rightIcon} position="right" />}
  </Container>
);

export default InputField;
