import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity 
} from 'react-native';
//import Details from './details';
import QrCode from './qrcode';
import About from './about';
import Search from './search'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
        id:1,
        };
    }
     render() {
        return (
        <View style={styles.container}>
             <View style={styles.Image}>
          <Image
          style={{width:250, height:120, resizeMode:'stretch'}} 
           source={require('../image/zt_logo.png') }/>
        </View>

            <TouchableOpacity
                style={styles.Button}
                onPress={this._onPressDetails.bind(this) }>
                <Text style={styles.InfoText}>
                        登记信息
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.Button}
                onPress={this._onPressSearch.bind(this) }>
                <Text style={styles.InfoText}>
                        查看信息
                </Text>
            </TouchableOpacity>
          
        
            <TouchableOpacity
                style={styles.Button}
                onPress={this._onPressAbout.bind(this) }>
                <Text style={styles.InfoText}>
                        关于
                </Text>
            </TouchableOpacity>
          
            </View>
             

        );
    }
    _onPressDetails(){

     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'QrCode',
         component : QrCode,
          params:{                  
               id:this.state.id,   
               }
       });
     }
   };

   _onPressSearch(){
     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'Search',
         component : Search,
       });
     }
    };
   


    _onPressAbout(){

  const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'About',
         component : About,
       });
     }
    };
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    Image:{
        height: 200,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
     Button: {
       marginTop:30,
        height: 50,
        width:320,
        backgroundColor: '#3281DD',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InfoText: {

        fontWeight: 'bold',
        width: 80,
        color: '#fff',
        
    },

});