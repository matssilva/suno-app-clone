import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from '../../tailwind';
import { Icon } from 'react-native-elements';
import LogoImage from '../../assets/sunoLogo.svg';

const HeaderHome = ({ headerTitle }) => {
  return (
    <View
      style={tw`flex-row bg-black items-center h-20 px-3 pt-4 justify-between border border-b-gray-light`}
    >
      <Icon
        size={30}
        type="material"
        name="notifications-none"
        color={'rgb(152,152,152)'}
      ></Icon>

      <Text style={tw`text-white text-lg font-semibold`}>{headerTitle}</Text>
      <Icon size={30} type="material" name="search" color={'rgb(152,152,152)'}></Icon>
    </View>
  );
};

export default HeaderHome;
