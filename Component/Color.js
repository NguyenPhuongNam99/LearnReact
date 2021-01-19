import React,{useState} from 'react';
import {

  StyleSheet,
  View,
  Text,
  FlatList,
  Button,ScrollView,
  TextInput,TouchableOpacity,CheckBox
} from 'react-native';

const Color = (props)=>{
    const dataColor = [
    { id: 1, color: '#FF0000' },
    { id: 2, color: '#05FF00' },
    { id: 3, color: '#001AFF' },
    { id: 4, color: '#00FFF0' },
]
const handleChooseColor = props.handleChooseColor;
// const color = props.color;
    return(
        <View style={styles.left}>
        <Text style={styles.text}>Color Picker</Text>
        <View style={styles.wrap}>
                 {/* <TouchableOpacity onPress={() =>  setColor(value.color)}>
                    <View  style={{width:20,height:20,backgroundColor:'#FF0000',marginLeft:13}}></View>
                  </TouchableOpacity>
                    <TouchableOpacity onPress={() =>  setColor(value.color)}>
                       <View style={{width:20,height:20,backgroundColor:'#05FF00',marginLeft:13}}></View>
                    </TouchableOpacity >
                   <TouchableOpacity onPress={() =>  setColor(value.color)}> 
                     <View style={{width:20,height:20,backgroundColor:'#001AFF',marginLeft:13}}></View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() =>  setColor(colorChoose.color)}>
                      <View style={{width:20,height:20,backgroundColor:'#00FFF0',marginLeft:13}}></View>
                   </TouchableOpacity> */}
            {dataColor.map((item) => {
            return (
                <TouchableOpacity  style={[styles.buttonTest,{backgroundColor: item.color}]} onPress={() => handleChooseColor(item)} >
                  
                  </TouchableOpacity>
            ) ;
        })}
           
        </View>
    </View>
    );
};
const styles =StyleSheet.create({
    buttonTest: {
        height: 20,
        width: 20,
        marginTop:3,
        marginHorizontal:9
    },
    left:{
        flex:0.5,
        // width: 168,
        height: 121,
        backgroundColor:'#FFFFFF',
        shadowRadius: 2,
            shadowOpacity: 0.5,
            elevation:6,
           // backgroundColor: '#1DC48F',
            borderRadius: 10,
       
        marginRight:20
      },
      text:{
        fontFamily:'Roboto',
        fontSize:16,
        fontWeight:'normal',
        fontSize:16,
        lineHeight:19 ,
        backgroundColor: '#BD1313',
        borderRadius: 3,
        height:31,
        color:'#FFFFFF',
        paddingHorizontal:6,
        paddingVertical:5
      },
      wrap:{
        flexDirection:'row',
        marginTop:13
      },
})
export default Color;