import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../Themes/Colors';
import { vh, vw } from '../Themes/Dimension';

const MyButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.titleStyle}> {title} </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: vw * 2,
    backgroundColor: colors.primary,
    paddingVertical: vh * 1.5,
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.white,
    fontSize: vw * 4,
  },
});
