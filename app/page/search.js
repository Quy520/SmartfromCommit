import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
  TextInput,
  ListView
} from 'react-native';
let WIDTH = Dimensions.get('window').width;
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'

export default class PullToRefreshDemo extends Component {

  constructor(props) {
      super(props);
      this._renderRow = this._renderRow.bind(this);
      this.state = {
        text: '',
        dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    loaded: false,
    isRefreshing: false
      };
  }

  searchUser(){
    console.log(this.state.text);
    if (this.state.text !== '') {   
       alert("可以查询")
    }else{
      alert("请输入搜索设备信息")
    }
  }
  

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({        
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }



  
  render() { 
     // let swipeoutBtns = [{ text:'Button'}]
    return (
      <View style={styles.container}>
        <View style={styles.inputViewStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="请输入搜索设备信息"
            onChangeText={(text) => this.setState({text})}
          />
          <TouchableOpacity onPress={this.searchUser.bind(this)}>
            <Text style={{fontSize:30, marginLeft:10}}>🔍</Text>
          </TouchableOpacity>         
        </View>
   
         <ListView
            initiaListSize={1}
            enableEmptySections={true}
            onEndReachedThreshold={10}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            style={styles.listView}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
                color="#ccc"
                />
            }
        />

       
      </View>
    );
  }

  _onRefresh(){
     this.setState({isRefreshing: true});
  }



    _renderRow(movies) {
        console.log(movies);
    return (
      <View style={styles.listContainer}>
      <TouchableOpacity
            activeOpacity={0.75}
            onPress={this._onPressFeedItem.bind(this,movies.id)}
             style={styles.center}
            >   
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movies.title}tag1</Text>
          <Text style={styles.year}>{movies.year}</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }

_onPressFeedItem(movies){
  alert(movies);

}




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },
  center:{
   flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
},
  listContainer:{
     flex: 1,
     marginTop:20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

 rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
   title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  inputViewStyle:{
    marginTop: 30,
    width: WIDTH,
    height: 32,
    flexDirection: 'row',
  },

   listView: {
      backgroundColor: '#F5FCFF',
      paddingTop:10
    },

  inputStyle: {
    marginLeft: 20,
    marginTop: 1,
    width: WIDTH-80,
    height: 30,
    //borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
 
});
