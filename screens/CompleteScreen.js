import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TODOS } from '../utils/data.js';
import {
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';

import styles from '../utils/styles'
import TodoItem from '../components/TodoItem'

export default class CompleteScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  onToggleTodo = id => {
  }

  onDeleteTodo = id => {
  };
  render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')}>
        <ScrollView >
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              <View >
                {TODOS.filter(todo => todo.status === 'Done').map((todo, idx) => {
                  return <TodoItem
                    key={todo.body}
                    todo={todo}
                    idx={idx}
                    onToggleTodo={this.onToggleTodo}
                    onDeleteTodo={this.onDeleteTodo}
                     />;
                })}
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );

  }
}

CompleteScreen.navigationOptions = {
  title: 'Done Todos'
};
