import React from 'react';
import { View, FlatList, StyleSheet, Button, Linking } from 'react-native';
import CardItem from './CardItem';

// import du JSON local
import cards from '../data/cards.json';

// export nommé
export function CardList() {
  const renderItem = ({ item }) => (
    <View>
    <CardItem
      title={item.title}
      description={item.description}
      image={item.image}
    />
      
      <Button style={{ padding: 20 }}
        title="Cliquez-moi"
        onPress={() => Linking.openURL(item.url)}
        color="#007AFF"
      /> 
      

    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
