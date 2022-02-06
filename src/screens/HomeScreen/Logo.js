import { Image } from 'react-native';
import React from 'react';
import LogoImage from '../../../assets/sunoLogo.svg';

const Logo = () => {
  return (
    <Image
      style={{ width: 200, height: 200 }}
      source={require('../../../assets/sunoLogo.svg')}
    />
  );
};

export default Logo;
