import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from '../../tailwind';

const Option = ({ text, setSelectedOption, isSelected }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedOption(text)}>
      <View
        style={tw`bg-black-light rounded-full px-6 py-3 mr-2 ${isSelected && 'bg-red'}`}
      >
        <Text style={tw`text-center text-white font-semibold`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Option;
