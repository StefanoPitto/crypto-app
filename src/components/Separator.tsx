import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Separator = () => <View style={styles.border}></View>;

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    borderColor: '#00000029',
  },
});
