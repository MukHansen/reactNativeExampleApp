import React from 'react';
import { View, Text } from 'react-native';

FlexDirectionBasics = () => {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'steelblue'}} />
        <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'green'}} />
      </View>
    );
};

//https://reactnative.dev/docs/flexbox#flex-direction
export default function FlexDirectionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>Flex Direction</Text>
      <FlexDirectionBasics />
    </View>
  );
}