import { Text, View, Alert, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    todoItem: {
      margin: 7,
      padding: 10,
      minHeight: 50,
      width: '96%',
      color: 'white',
      borderRadius: 5,
      flexWrap: 'wrap'
    },
    todoText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
    },
    todoInput: {
      width: '97%',
      minHeight: 30,
      color: 'white',
      borderWidth: 1,
      marginTop: '20%',
      marginBottom: '5%',
      borderColor: 'grey'
    },
    inputContainer: {
      flex: 1,
      width: '95%',
      marginTop: 20,
      marginBottom: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100
    },
    button: {
      height: 50,
      width: '50%',
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: 'blue',
      justifyContent: 'center',
      marginBottom: 800,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold'
    },
    scrollView: {
      flex: 1,
      paddingTop: 1000
    }
  });
  export default styles;