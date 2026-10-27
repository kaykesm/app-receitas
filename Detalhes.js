import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Detalhes({ route }) {
  const { receita } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>{receita.strMeal}</Text>

      <Image
        source={{ uri: receita.strMealThumb }}
        style={{ width: 250, height: 250 }}
      />
    </View>
  );
}