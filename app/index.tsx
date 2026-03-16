
import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

export default function Index() {
 
  const [count , setCount] = useState(0)
  if(count === 0 ) {
    setCount(count + 1)
  }
  
  return (

    <View  style={styles.container}>
      <Text style={styles.text}>{count}</Text>
     <View style={styles.button}>
       <Button  title="increament" onPress={() =>setCount( s => s+1)}/>
       <Button  title="Decreament" onPress={() =>setCount(s => s-1) }/>
     </View>
    </View>
  )
 
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    backgroundColor: "#fff",
    alignItems : "center",
    justifyContent : "center"
  },
  text : {
    fontSize : 50,
    marginBottom : 20
  },
  button :{
    flexDirection: "row",
    width : "80%",
    justifyContent: 'space-around'
    
  }
})
