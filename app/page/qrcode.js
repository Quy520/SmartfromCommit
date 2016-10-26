
import React , { Component } from 'react';
import {
  Navigator ,
  View ,
  Text,
  StyleSheet,
  Image,
  BackAndroid,
  TouchableOpacity,
  Vibration
} from 'react-native';
import Details from './details';
import BarcodeScanner from 'react-native-barcodescanner';
import Icon from 'react-native-vector-icons/Ionicons';

export default class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: '1',
      cameraType: 'back',
      text: '',
      torchMode: 'off',
      type: '1',
    };
    this.succesed = false;
  }
  _onPressDetails(){
        //alert("跳转")
     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'Details',
         component : Details,
          params:{                  
                id:this.state.text,   
               }
       });
     }
   };

  barcodeReceived(e) {
    if (e.data !== this.state.barcode || e.type !== this.state.type)  
    Vibration.vibrate(); 
    this.setState({
      barcode: e.data,
      text: `${e.data}`,
      type: e.type,
    });
   

  }

  render() {
    return (
      <View style={styles.container}>
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={{ flex: 1 }}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}
        />
        <View style={styles.statusBar}>
         <TouchableOpacity
                style={styles.Button}
                onPress={this._onPressDetails.bind(this) }>
                <Text style={styles.InfoText}>
                        确定
                </Text>
            </TouchableOpacity>
           <Text style={styles.statusBarText}>设备ID:{this.state.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  },
  Button: {
        marginTop:10,
        height: 50,
        width:320,
        backgroundColor: '#3281DD',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
