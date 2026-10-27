import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Home({ navigation }) {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then(resposta => {
        setReceitas(resposta.data.meals);
      });
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>App de Receitas</Text>

      <FlatList
        data={receitas}
        keyExtractor={item => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => navigation.navigate('Detalhes', { receita: item })}
          >
            <Text>{item.strMeal}</Text>
            <Image
              source={{ uri: item.strMealThumb }}
              style={{ width: 150, height: 150 }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}