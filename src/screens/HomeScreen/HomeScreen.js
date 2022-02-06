import { View, Text } from 'react-native';
import React from 'react';
import tw from '../../../tailwind';
import SunoCallList from '../../components/SunoCallList/SunoCallList';
import LastReports from '../../components/LastReports/LastReports';

const HomeScreen = () => {
  return (
    <View style={tw`bg-black h-full p-3`}>
      <View style={tw`flex-row items-center justify-between mt-6`}>
        <Text style={tw`text-2xl text-white font-bold`}>Suno Call</Text>
        <Text style={tw`text-base text-red font-semibold`}>ver todos</Text>
      </View>
      <View style={tw`mb-4`}>
        <SunoCallList />
      </View>
      <LastReports />
    </View>
  );
};

export default HomeScreen;
