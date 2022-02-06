import { View, Text } from 'react-native';
import React from 'react';
import tw from '../../tailwind';
import { Icon } from 'react-native-elements';

const Header = ({ headerTitle }) => {
  return (
    <View style={tw`flex-row bg-black items-center h-20 pl-3 pt-4 border-b-gray-400`}>
      <Icon type="font-awesome" name="chevron-left" color={'rgb(203,40,26)'}></Icon>
      <View style={tw`flex-row items-center justify-center w-80`}>
        <Text style={tw`text-white text-lg font-semibold`}>{headerTitle}</Text>
      </View>
    </View>
  );
};

export default Header;
