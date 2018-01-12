import React from 'react';
import { StyleSheet, Text, TextInput, View , Button, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {text: ''};
    this._onPressButton = this._onPressButton.bind(this)
  }
  
  _onPressButton() {
    Alert.alert(this.state.text)
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>{ this.state.text }</Text>
        <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />

        <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
