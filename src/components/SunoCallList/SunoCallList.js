import { View, FlatList, Dimensions } from 'react-native';
import React from 'react';
import Card from '../../shared/Card';

const { width } = Dimensions.get('window');

const data = ['red', 'yellow', 'blue', 'purple', 'green'];

const SunoCallList = () => {
  const calculateOffsets = () => {
    return data.map((item, index) => {
      return index * (width * 0.9) + (index - 1);
    });
  };

  return (
    <FlatList
      data={data}
      style={{ marginTop: 15 }}
      keyExtractor={(item) => String(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      scrollEventThrottle={16}
      decelerationRate="fast"
      snapToOffsets={calculateOffsets()}
      renderItem={({ item }) => <Card item={item} />}
    />
  );
};

export default SunoCallList;
