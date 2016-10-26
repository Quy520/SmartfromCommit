import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    DeviceEventEmitter,
    BackAndroid,
    Keyboard
} from 'react-native';
import Main from './main'
import Swiper from 'react-native-swiper';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true, 
            isKeyboardDisplay: false,
            paddingTopValue: 41
        }
    }
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._onPressBack.bind(this));
        Keyboard.addListener('keyboardDidHide', this._onKeyboardDidHide.bind(this));
    }
    componentWillUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress');
        Keyboard.addListener('keyboardDidHide', this._onKeyboardDidHide.bind(this)).remove();
    }
    render() {
        return (
            <View style={[styles.container, {paddingTop:this.state.paddingTopValue}]}>
                <View style={styles.top}>
                    <Image 
                        style={{width:200, height:150, resizeMode:'stretch'}} 
                        source={require('../image/zt_logo.png')} />
                </View>
                <Swiper ref='swiper' loop={false} showsButtons={false} height={240} showsPagination={false} index={0} onMomentumScrollEnd ={this._onMomentumScrollEnd.bind(this)}>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginTop: 80 }}>
                            <TextInput
                                style={{ fontSize: 18, color: '#ccc', width: width*0.8, height: 44, borderColor: 'gray'}}
                                placeholder='手机号或邮箱'
                                onFocus={this._onFocus.bind(this) }
                                onLayout={null}
                                onSubmitEditing={null}
                                />
                            <TextInput
                                style={{ fontSize: 18, color: '#ccc', width: width*0.8, height: 44, borderColor: 'gray' }}
                                placeholder='密码'
                                onFocus={this._onFocus.bind(this) }
                                onChangeText={null}
                                />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginTop: 35 }}>
                            <TextInput
                                style={{ fontSize: 18, color: '#ccc', width: width*0.8, height: 44, borderColor: 'gray' }}
                                placeholder='手机号（中国大陆号码）'
                                onFocus={this._onFocus.bind(this) }
                                onLayout={null}
                                onSubmitEditing={null}
                                />
                            <TextInput
                                style={{ fontSize: 18, color: '#ccc', width: width*0.8, height: 44, borderColor: 'gray' }}
                                placeholder='密码'
                                onFocus={this._onFocus.bind(this) }
                                onChangeText={null}
                                />
                            <TextInput
                                style={{ fontSize: 18, color: '#ccc', width: width*0.8, height: 44, borderColor: 'gray' }}
                                placeholder='姓名'
                                onFocus={this._onFocus.bind(this) }
                                onChangeText={null}
                                />
                        </View>
                    </View>
                </Swiper>
                <View style={{ marginTop: -75}}>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={this._onPressLogin.bind(this) }>
                        <Text style={styles.loginText}>
                        {
                            this.state.isLogin ? '登录' : '注册' 
                        }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._onPressLoginOrRegister.bind(this) }>
                        <Text style={{ justifyContent: 'center', color: '#4A90E2', textAlign: 'center', marginTop: 28 }}>
                        { 
                            this.state.isLogin ? (this.state.isKeyboardDisplay ? '无法登录?' : '没有知乎帐号?  去注册') : 
                                '已有知乎帐号?  去登录'         
                        }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    _onPressBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
            return true;
        }
        return false;
    }
    _onKeyboardDidHide() {
        if (this.state.isKeyboardDisplay) {
            this.setState({
                isKeyboardDisplay: false,
                paddingTopValue: 41
            })
        }
    }
    _onFocus() {
        if (this.state.isKeyboardDisplay != true) {
            this.setState({
                isKeyboardDisplay: true,
                paddingTopValue: -30
            })
        }
    }
    _onPressLogin() {
         //const {doLogin} = this.props.actions; 
        // //登录
          //console.log(doCommit)
        //doLogin('18930034922', '123456');
        const { navigator } = this.props;
         if (navigator) {
            navigator.push({
            name : 'Main',
            component : Main,
             });
         }


    }

    _onMomentumScrollEnd(e, state, context) {
        console.log(state, context.state)
        //切换
        this.setState({
            isLogin: !state.index,
        })
    }
    _onPressLoginOrRegister() {
        if (this.state.isLogin && 
            this.state.isKeyboardDisplay) {
            //无法登录?
        } else {
            if (this.state.isLogin) {
                this.refs.swiper.scrollBy(+1);
            } else {
                this.refs.swiper.scrollBy(-1);
            }
            //切换
            this.setState({
                isLogin: !this.state.isLogin,
            })
        }
    }
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 41,
        backgroundColor: '#fff'
    },
    top:{
        height: 80,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontWeight: 'bold',
        width: 30,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        marginTop: 20,
        height: 50,
        width: width*0.8,
        backgroundColor: '#3281DD',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export const LayoutComponent = Login;
export function mapStateToProps(state) {
    return {
        User: state && state.User
    }
}