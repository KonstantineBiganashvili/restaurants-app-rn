import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text numberOfLines={1} style={styles.name}>
        {result.name}
      </Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginLeft: 15 },

  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },

  name: {
    width: 250,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ResultDetails;
