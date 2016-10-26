import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackAndroid,
  Image
} from 'react-native';

export default class MyProject extends Component {

  componentDidMount() {
       BackAndroid.addEventListener('hardwareBackPress', this._onPressBack.bind(this));   
  }

  _onPressBack(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
             return true; 
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.about}>
            上海洲涛智能有限公司设备登录系统
        </Text>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  about: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  tele: {
    fontSize: 20,
    justifyContent: 'center',
    marginBottom: 20,
  
  },

});
