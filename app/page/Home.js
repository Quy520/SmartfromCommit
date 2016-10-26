import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ListView,
  TouchableOpacity,
  View,
  InteractionManager,
  RefreshControl,
  Navigator,
  TextInput
} from 'react-native';

import {
  home,
} from '../actions/homeActions';
import Common from '../common/common';
import Loading from '../common/Loading';
import LoadMoreFooter from '../common/LoadMoreFooter';

let limit = 21;
let offest = '';
let tag = '';
let isLoadMore = false;
let isRefreshing = false;
let isLoading = true;
export default class Home extends Component{
 constructor(props) {
    super(props); //这一句不能省略，照抄即可
    // debugger
    this._renderRow = this._renderRow.bind(this);
    this.state = {
      text:'',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
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
    // 组件渲染完成 已经出现在dom文档里
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
        const {dispatch} = this.props;
        dispatch(home(tag, offest, limit, isLoadMore, isRefreshing, isLoading));
        })
   }

    render() {
        const { Home,rowDate } = this.props;
        tag = rowDate;
        //let homeList=Home.HomeList;
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
             {Home.isLoading ? <Loading /> :
          <ListView
            dataSource={this.state.dataSource }
            renderRow={this._renderRow}
            contentContainerStyle={styles.list}
            enableEmptySections={true}
            initialListSize= {10}
            onScroll={this._onScroll}
            onEndReached={this._onEndReach.bind(this) }
            onEndReachedThreshold={10}
            renderFooter={this._renderFooter.bind(this) }
            style={styles.listView}
            refreshControl={
              <RefreshControl
                refreshing={Home.isRefreshing}
                onRefresh={this._onRefresh.bind(this) }
                title="正在加载中……"
                color="#ccc"
                />
            }
            
            />
        }
        </View>

    );

  }
  //每行的数据源
  _renderRow(rowDate){
      return(
          <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={this._onPressFeedItem.bind(this,rowDate) }
          >
           <View style={styles.rightContainer}>
          <Text style={styles.title}>{rowDate.id}tag1</Text>
        </View>
        </TouchableOpacity>
      </View>
      );

  }
  //点击每个图片的监听跳转到全屏模式
  //InteractionManager:将一些耗时较长的工作安排到所有互动或动画完成之后再进行
_onPressFeedItem(rowDate){
   alert(rowDate)

}

//上拉刷新，到达底部
  _onEndReach(){
      InteractionManager.runAfterInteractions(() => {
      const {dispatch, Home} = this.props;
     // let homeList = Home.HomeList;
      isLoadMore = true;
      isLoading = false;
     // offest = homeList[homeList.length - 1].seq
      dispatch(home(tag, offest, limit, isLoadMore, isRefreshing, isLoading));
    })


  }

  //是否滑到底部
  _onScroll(){
       if (!isLoadMore)
        isLoadMore = true;
  }

//到达底部监听：加载更多。。。
  _renderFooter(){
    const {Home} = this.props;
    if (Home.isLoadMore) {
      return <LoadMoreFooter />
    }
  }
//下拉刷新
_onRefresh(){
    if(isLoadMore){
      const {dispatch, Home} = this.props;
      isLoadMore = false;
      isRefreshing = true;
      dispatch(home('', '', limit, isLoadMore, isRefreshing, isLoading));  
    }


}


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },
  listView: {
    backgroundColor: '#F5FCFF',
    height: Common.window.height - 44 - 60 - 20,
  },

 rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',

  },

  header: {
    marginTop: 20,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
  },
});
