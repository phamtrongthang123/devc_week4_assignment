
import React from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { TODOS } from '../utils/data.js';
import {
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import styles from '../utils/styles'


export default class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }
  onLongPress = todo => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.props.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  render(){
  statusStyle = {
    backgroundColor: this.props.todo.status === 'Done' ? '#585858' : 'green'
  };
  return (
    <TouchableOpacity
      key={this.props.todo.body}
      style={[styles.todoItem, statusStyle]}
      onPress={() => this.props.onToggleTodo(this.props.todo.id)}
      onLongPress={()=>this.onLongPress(this.props.todo)}
    >
      <Text style={styles.todoText}>
        {this.props.idx + 1}: {this.props.todo.body}
      </Text>
    </TouchableOpacity>
  );
  }
};

