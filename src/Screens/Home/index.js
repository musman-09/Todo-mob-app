import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../Assets/Themes/Colors';
import { styles } from './style';
import MyInputFeild from '../../Assets/Components/MyInputFeild';
import MyButton from '../../Assets/Components/MyButton';
import TodosBox from '../../Assets/Components/TodosBox ';

const Home = () => {
  const [input, setInput] = useState('');

  const onPressAdd = () => {
    console.log(input, 'input');
  };

  const handleEdit = () => {
    console.log('SAd');
  };

  const handleDelete = () => {
    console.log('s');
  };

  const onChange = text => {
    setInput(text);
  };
  return (
    <LinearGradient style={styles.gradient} colors={colors.linearGradient}>
      <MyInputFeild placeholder={'enter something ..'} onChange={onChange} />

      <MyButton onPress={onPressAdd} title={'Add'} />

      <TodosBox
        message={'ppoasdasd'}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </LinearGradient>
  );
};

export default Home;
