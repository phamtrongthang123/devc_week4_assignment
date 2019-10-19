import React from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { TODOS } from '../utils/data.js';
import {
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';

import styles from '../utils/styles'
import TodoItem from '../components/TodoItem'

export default class AllScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todoList:TODOS,
      todoBody:'',
    }
  }

  onSubmitTodo = () => {
    const newTodo = {
      body: this.state.todoBody,
      status: 'Active',
      id: this.state.todoList.length + 1
    };
    const newTodoList = [...this.state.todoList, newTodo];
    this.setState({todoList: newTodoList});
    this.setState({todoBody: ''});
  };

  onToggleTodo = id => {
    setTimeout(() => {
      this.props.navigation.navigate('SingleTodo', {
        updatedTodo: todo
      });
    }, 300);
    const todo = this.state.todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = this.state.todoList.findIndex(todo => todo.id === id);
    this.state.todoList[foundIndex] = todo;
    const newTodoList = [...this.state.todoList];
    this.setState({ todoList: newTodoList });
  }

  onDeleteTodo = id => {
    const newTodoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({ todoList: newTodoList });
  };

  render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')}>
        <KeyboardAvoidingView
          enabled
          behavior="padding"
        >
          <ScrollView >

            <View style={styles.container}>

              <View style={{ flex: 1}}>
                <View >
                  {this.state.todoList.map((todo, idx) => {
                    return <TodoItem
                      key={todo.body}
                      todo={todo}
                      idx={idx}
                      onToggleTodo={this.onToggleTodo}
                      onDeleteTodo={this.onDeleteTodo} />;
                  })}
                </View>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  value={this.state.todoBody}
                  style={styles.todoInput}
                  onChangeText={text => this.setState({ todoBody: text })}
                />
                <TouchableOpacity style={styles.button} onPress={this.onSubmitTodo}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>

    );
  }
}

AllScreen.navigationOptions = {
  title: 'All Todos'
};
