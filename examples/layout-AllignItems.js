import React from 'react';
import { View, Text } from 'react-native';

export default AlignItemsBasics = () => {
  return (
    // Try setting `alignItems` to 'flex-start'
    // Try setting `justifyContent` to `flex-end`.
    // Try setting `flexDirection` to `row`.
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'stretch',
    }}>
      <View style={{height: 50, backgroundColor: 'powderblue'}} />
      <View style={{height: 50, backgroundColor: 'skyblue'}} />
      <View style={{height: 100, backgroundColor: 'steelblue'}} />
    </View>
  );
};


//https://reactnative.dev/docs/flexbox#align-items
// export default function AlignItemsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
//       <Text style={{fontSize:24}}>Aligh Items</Text>
//       <AlignItemsBasics />
//     </View>
//   );
// }