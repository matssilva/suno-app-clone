import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from '../../tailwind';
import { Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');

const Card = ({ item, type }) => {
  const renderCallCard = () => {
    return (
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
    );
  };

  const renderReportCard = () => {
    return (
      <View style={tw`flex-1`}>
        <Text style={tw`text-gray text-xs font-semibold`}>há 2 dias</Text>
        <Text style={tw`text-white font-bold text-xl my-2`}>
          Fundos imobiliários como proteção à inflação
        </Text>
        <Text style={tw`text-gray text-xs font-semibold`}>
          Atualizações sobre Odontoprev (ODPV3) e CCR (CCRO3)
        </Text>
        <TouchableOpacity style={tw`flex-row items-center mt-8`}>
          <View style={tw`p-3 bg-black-light rounded-full w-12 shadow-lg mr-4`}>
            <Icon
              type="material-community"
              name="eye-outline"
              iconStyle={tw`text-white`}
            />
          </View>
          <Text style={tw`text-gray font-semibold`}>Abrir relatório</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCardType = () => {
    if (type === 'call-card') return renderCallCard();
    if (type === 'report-card') return renderReportCard();
  };

  return (
    <View
      style={[
        tw`bg-black-light px-5 py-7`,
        {
          height: type === 'call-card' ? width / 1.7 : width / 1.3,
          width: type === 'call-card' ? width * 0.9 - 10 : width * 0.9,
          margin: 5,
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
      {renderCardType()}
    </View>
  );
};

export default Card;
