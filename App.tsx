
import React from 'react';

import {

  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App=() =>{
  let data=10;
  const fruit=(val)=>{
    data=20;
    console.warn(data)
  }
  

  return (
    <View>
      <Text style={{fontSize:30}}>Button and OnPress Event</Text>
      <Text style={{fontSize:30}}>{data}</Text>
      <Button title='On Press' color={'green'} onPress={()=>fruit("Hello")}/>
      <Button title='On Press' color={'red'} onPress={fruit}/>
    </View>
  );
}


  
   

export default App;
