import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import ListOptionsHorizontal from '../../shared/ListOptionsHorizontal';
import tw from '../../../tailwind';
import Card from '../../shared/Card';

const options = [
  'Todos',
  'Insider Spy',
  'Macroeconomia',
  'Renda Fixa',
  'Reserva de Emergência',
];

const data = ['red', 'yellow', 'blue', 'purple', 'green'];

const LastReports = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const renderCards = () => {
    return data.map((item, index) => {
      return <Card key={index} item={item} type="report-card" />;
    });
  };

  return (
    <View>
      <Text style={tw`text-2xl text-white font-bold mb-7`}>Ultimos Relatórios</Text>
      <ListOptionsHorizontal
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {renderCards()}
    </View>
  );
};

export default LastReports;
