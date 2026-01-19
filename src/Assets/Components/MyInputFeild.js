import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../Themes/Colors';
import { vh, vw } from '../Themes/Dimension';

const MyInputFeild = ({ placeholder, onChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputFeild}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};

export default MyInputFeild;

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.light,
    marginTop: vh * 3,
    marginBottom: vh * 2,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: vw * 2,
  },
  inputFeild: {
    height: vw * 15,
    paddingLeft: vw * 3,
    fontSize: vw * 4,
  },
});
