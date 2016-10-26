import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  BackAndroid,
TouchableOpacity
} from 'react-native';
export default class Detalis extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            phone:'',
            location:''

        }
    }

render(){
    return(
        <View style={styles.container}>
      
            <View style={{ marginTop: 50 }}>
                <TextInput
                    defaultValue={this.props.id+''}
                    editable={false}
                    style={styles.TextInput}
                    placeholder='设备ID'
                    onChangeText={(id) => this.setState({id})}  
                    multiline ={false}                
                    //value={this.state.id}
                    />
                <TextInput                   
                    style={styles.TextInput}
                    placeholder='用户名(棚主)' 
                    onChangeText={(name) => this.setState({name})}
                    value='qsd'
                    />
                <TextInput
                  style={styles.TextInput}
                    placeholder='手机号(棚主)' 
                    onChangeText={(phone) => this.setState({phone})} 
                       value='qsd' 
                    />
                <TextInput
                    style={styles.TextInput}
                    placeholder='地理位置'
                    onChangeText={(location) => this.setState({location})}
                       value='qsd'
                   />
            </View>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={this._onPressAbout.bind(this) }>
                    <Text style={styles.InfoText}>
                            提交
                    </Text>
                </TouchableOpacity>
            </View>
        
        );
    }

    _onPressAbout(){
       // alert("提交成功")
        const {doCommit} = this.props.dispatch();
        console.log(doCommit)
        doCommit(id,name,phone,location);
        
    }

    componentDidMount(){
        this.setState({
        id:0
        })
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
   TextInput:{
       marginTop: 10,
       fontSize: 18, 
       color: '#ccc', 
       width: 320,
       height: 44,
       borderColor: 'gray',
      
   },
     Button: {
       marginTop:20,
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
        width: 30,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export const LayoutComponent = Detalis;
export function mapStateToProps(state) {
    return {
        Commit: state && state.Commit
    }
}