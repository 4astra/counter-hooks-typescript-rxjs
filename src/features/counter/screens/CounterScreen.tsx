import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { doIncrement, doDecrement } from '../actions'
import { RootState } from 'typesafe-actions';

 const CounterScreen = () => {

  const dispatch = useDispatch();

  const value = useSelector((state: RootState) => state.counter.num);

  return(
    <View style={styles.contents}>
      <Text>Counter value: {value}</Text>
      <View style={styles.subs}>
        <Button title="Increase" onPress={() => dispatch(doIncrement.request())} />
      </View>
      <View style={styles.subs}>
        <Button title="Increase" onPress={() => dispatch(doDecrement.request())} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    flexDirection: 'column'
  },
  subs: {
    marginTop: 10,
  }
});

export default CounterScreen;
