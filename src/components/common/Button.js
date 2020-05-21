import React from 'react';
import styled from 'styled-components';

const types = {
  primary: {
    color: '#fff',
    borderColor: '#FBB428',
    background: '#FBB428',
  },
  secondary: {
    color: '#989898',
    borderColor: '#989898',
    background: '#fff',
  },
};

const Button = styled.button`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid ${({ borderColor }) => borderColor};
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  cursor: pointer;
  outline: 0;
  font-size: 16px;
  font-family: Poppins Semibold;
`;

export default ({ variant, ...props }) => <Button {...types[variant]} {...props} />;
