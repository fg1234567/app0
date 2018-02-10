/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';




export default class App extends Component<Props> {

  _onPressButton1() {


  }

  constructor(props){
    super(props);
    this.state ={
      height:50,
      width:150,
      marginTop:20,
    }

  }


  render() {
    return (
      <View style={styles.container}>
       <View style={{marginTop: this.state.marginTop , width: this.state.width, height: this.state.height, backgroundColor: '#a21C2F'}} >
            </View>
        <Button style={{margin: 10}}
              onPress={() => this.setState({marginTop: this.state.marginTop-5, height: this.state.height+5,width:200})}
              title="Wednesday"
            />

             <Button style={{marginBottom: 10}}
              onPress={() => this.setState({height: 125,width:100})}
              title="Wednesday"
            />
           
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
