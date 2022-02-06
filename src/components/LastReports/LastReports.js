import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ListOptionsHorizontal from '../../shared/ListOptionsHorizontal';
import tw from '../../../tailwind';

const options = [
  'Todos',
  'Insider Spy',
  'Macroeconomia',
  'Renda Fixa',
  'Reserva de Emergência',
];

const LastReports = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <View>
      <Text style={tw`text-2xl text-white font-bold mb-7`}>Ultimos Relatórios</Text>
      <ListOptionsHorizontal
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </View>
  );
};

export default LastReports;
