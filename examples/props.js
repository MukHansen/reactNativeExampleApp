import React from 'react';
import { Text, View } from 'react-native';

const Greeting = (props) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {props.name}!</Text>
      </View>
    );
}

function LotsOfGreetings() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
}

//https://reactnative.dev/docs/intro-react#props
export default function PropsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>PropsDemo</Text>
      <LotsOfGreetings />
    </View>
  );
}

