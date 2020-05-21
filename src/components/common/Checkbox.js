import React from 'react';
import styled from 'styled-components';

const Checkmark = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 18px;
  width: 18px;
  background: #fff;
  border: 1px solid #979797;
  border-radius: 4px;
  display: inline-block;
  position: relative;

  &:after {
    content: '';
    left: 5px;
    top: 2px;
    width: 3px;
    height: 6px;
    position: absolute;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Container = styled.label`
  position: relative;
  cursor: pointer;
  height: 18px;
  width: 18px;
  display: inline-block;

  > input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    :checked ~ ${Checkmark} {
      background: #FBB428;
      border-color: #FBB428;
    }
  }
  
`;

const Checkbox = ({ style, ...props }) => (
  <Container style={style}>
    <input type="checkbox" {...props} />
    <Checkmark />
  </Container>
);

export default Checkbox;
 