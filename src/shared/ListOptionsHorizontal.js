import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Option from './Option';

const ListOptionsHorizontal = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <FlatList
        data={options}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Option
            text={item}
            isSelected={selectedOption === item}
            setSelectedOption={setSelectedOption}
          />
        )}
      />
    </View>
  );
};

export default ListOptionsHorizontal;
