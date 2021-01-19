
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import React ,{useState}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FrontSize from './Component/FrontSize';
import Color from './Component/Color';
import Todolist from './Component/Todolist';
const Office = (props) => {
  const [activeObject, setActiveObject] = useState({ id: 3, color: '#001AFF' })
const [color, setColor] = useState('#000');
const [size, setSize] = useState(0);
const [todos, setTodos] = useState([]);
  const submithander = (text) =>{
  
    setTodos((prevtext)=>{
      return [
        {text:text,key:Math.random().toString()},
        ...prevtext
      ]
    })
  }
  const handleTodosChange = (item) => {
    let cloneTodos = todos;
    let cloneItem = cloneTodos.find((todoItem) => todoItem.key == item.key)
    if (cloneItem) {
        cloneItem.isChecked = !cloneItem.isChecked;
    }
    setTodos([...cloneTodos])
}

const handleChooseColor = (colorChoose) => {
  setActiveObject(colorChoose)
  setColor(colorChoose.color);
}
const handleChooseSize = (sizeChoose) => {
  setSize(sizeChoose);
}
  return (
    <>
    <View style={styles.container}>
        <View style={styles.header}>
           <Color handleChooseColor={handleChooseColor}
                        setActiveObject={setActiveObject}
                        activeObject={activeObject}/>
           <FrontSize size={size} handleChooseSize={handleChooseSize}/>
           
        </View>
        <Todolist  color={color}
                    todos={todos} size={size}
                    handleTodosChange={handleTodosChange}
                    submithander={submithander}/>
    </View>
     
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:20
  },
 header:{
   flexDirection:'row',
   
 }
});

export default Office;
