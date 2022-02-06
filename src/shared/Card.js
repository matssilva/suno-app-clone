import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import tw from '../../tailwind';
import { Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');

const Card = ({ item }) => {
  return (
    <View
      style={[
        tw`bg-black-light px-5 py-7`,
        {
          height: width / 1.7,
          width: width * 0.9 - 10,
          marginHorizontal: 5,
          borderRadius: 12,
        },
      ]}
    >
      <View style={tw`flex-row items-center justify-end`}>
        <Icon
          type="materia"
          name="bookmark-border"
          size={25}
          iconStyle={tw`text-gray`}
        ></Icon>
        <Icon
          type="material-community"
          iconStyle={tw`text-gray ml-5`}
          name="dots-vertical"
          size={25}
        ></Icon>
      </View>
      <View style={tw`flex-1 justify-end`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-gray text-xs font-semibold`}>Edição #986</Text>
          <View style={tw`bg-red h-1 w-1 rounded-full mx-3`} />
          <Text style={tw`text-gray text-xs font-semibold`}>há 2 dias</Text>
        </View>
        <Text style={tw`text-white font-bold text-xl my-2`}>
          Fundos imobiliários como proteção à inflação
        </Text>
        <View style={tw`flex-row items-center justify-start`}>
          <Icon
            type="material"
            name="access-time"
            size={12}
            iconStyle={tw`text-gray mr-1`}
          />
          <Text style={tw`text-gray text-xs font-semibold`}>3 min de leitura</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
