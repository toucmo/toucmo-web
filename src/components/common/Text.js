import React from 'react';
import styled from 'styled-components';

const fontMapping = {
  'title-1': {
    type: 'Semibold',
    size: 30,
    color: '#212121',
  },
  'subtitle-1': {
    type: 'Semibold',
    size: 20,
    color: '#212121',
  },
  'body-1': {
    type: 'Regular',
    size: 16,
    color: '#212121',
  },
  'body-2': {
    type: 'Bold',
    size: 16,
    color: '#39C2C8',
  },
  'body-3': {
    type: 'Semibold',
    size: 16,
    color: '#fff',
  },
  'link-1': {
    type: 'Medium',
    size: 16,
    color: '#000',
  },
  'caption-1': {
    type: 'Medium',
    size: 14,
    color: '#989898',
  },
  'caption-2': {
    type: 'Regular',
    size: 14,
    color: '#989898',
  },
  'helper-1': {
    type: 'Medium',
    size: 12,
    color: '#6F6F6F',
  },
  'helper-2': {
    type: 'Medium',
    size: 12,
    color: '#39C2C8',
  },
};

const Text = styled.span`
  font-family: ${({ type }) => `Poppins ${type || 'Regular'}`};
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  line-height: 1;
`;

export default ({ variant, ...props }) => <Text {...fontMapping[variant]} {...props} />;
