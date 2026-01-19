import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

import { vh, vw } from '../Themes/Dimension';
import { colors } from '../Themes/Colors';
import { icons } from '../../Assets/index';

const TodosBox = ({ message, handleEdit, handleDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> {message} </Text>

      <View style={styles.buttons}>
        <TouchableHighlight>
          <Image style={styles.iconStyle} source={icons.edit} />
        </TouchableHighlight>

        <TouchableHighlight>
          <Image style={styles.iconStyle} source={icons.delete} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default TodosBox;

export const styles = StyleSheet.create({
  container: {
    marginTop: vh * 2,
    backgroundColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw * 2,
    paddingVertical: vw * 4,
  },
  iconStyle: {
    height: vw * 6,
    width: vw * 6,
  },
  buttons: {
    flexDirection: 'row',
    gap: vw,
  },
  textStyle: {
    fontSize: vw * 4,
  },
});
