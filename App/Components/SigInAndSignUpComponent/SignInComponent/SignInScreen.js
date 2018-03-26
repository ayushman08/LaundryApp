import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
    Platform,
    TextInput,
    ScrollView,
    AsyncStorage,
    ImageEditor,
} from 'react-native';

import {
    userLogin,
} from "../../../Action/ActionCreators";

import {
    loginUserNameChanged,
    loginPasswordChanged,
    showLoading,
    resetState,
    clearResponse
} from "./SignInAction";

import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../../CommonStyle/CommonStyle';
import Colors from '../../../Constants/Colors';
import Strings from '../../../Constants/Strings';
import ImagePath from '../../../Constants/ImagesPath';
import SignInStyle from './SignInScreenStyle';
import MaterialTextInput from 'react-native-material-textinput';
import { View,Container, Header, Content, Tab, Tabs  } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { validateEmail } from '../../../Constants/CommonFunctions';
import * as Progress from 'react-native-progress';
import Api from "../../../WooCommerce/Api";
var postData = {};
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import SignInScreenStyle from './SignInScreenStyle';

class SignInScreen extends Component {

    constructor() {
        super();
        this.state = {
            isKeepSignedIn: false,
            isPasswordVisible: true,
            errorMsg: '',
            errorOnTextField: '',
            signIn:true,
            user: null,

        };
    }

    componentDidMount(){
        this._setupGoogleSignin();
       
    }

    componentDidUpdate() {
        this.onLoginSuccess();
    }

    onLoginSuccess() {

        if (this.props.signInReducer.loginRes != '') {

            if (this.props.signInReducer.loginRes.success) {

                if (this.props.signInReducer.loginRes.data.token != '') {

                     console.log('userinfo : ' + JSON.stringify(this.props.signInReducer.loginRes));
                    AsyncStorage.setItem("LaundryCustomerInfo", JSON.stringify(this.props.signInReducer.loginRes));
                   // AsyncStorage.setItem("userid", this.props.signInReducer.loginRes.data.user.id);
                   // AsyncStorage.setItem("KeepSignedIn", this.state.isKeepSignedIn + '');
                   Actions.dashboardScreen({type:'reset'});
                  //  this.props.resetState();

                }

            }
            else {
                
                    alert(this.props.signInReducer.loginRes.error);
                    this.props.clearResponse();
            }
        }
    }

    async _setupGoogleSignin() {
        try {
          await GoogleSignin.hasPlayServices({ autoResolve: true });
          await GoogleSignin.configure({
            iosClientId: '38136900378-qubhecb9h6fpfdvp97ubn1evh65sa7av.apps.googleusercontent.com',
            webClientId: '38136900378-qubhecb9h6fpfdvp97ubn1evh65sa7av.apps.googleusercontent.com',
            offlineAccess: false
          });
    
          const user = await GoogleSignin.currentUserAsync();
          console.log(user);
          this.setState({user});
        }
        catch(err) {
          console.log("Google signin error", err.code, err.message);
        }
    }

    componentWillMount(){
        Api.get('products')
			.then(function (data) {
				console.log("data"+JSON.stringify(data));
        });
    }

    

   

  signIn(){
  //   Actions.dashboardScreen({type:'reset'});
    if (this.props.signInReducer.userName.trim() == '') {

        this.setState({ errorMsg: Strings.ERROR_EMPTY_EMAIL });
        this.setState({ errorOnTextField: 0 });
    }
    
    else if (this.props.signInReducer.password.trim() == '') {

        this.setState({ errorMsg: Strings.ERROR_EMPTY_PASSWORD });
        this.setState({ errorOnTextField: 0 });
    } else {

        postData = {
            username: this.props.signInReducer.userName,
            password: this.props.signInReducer.password,
        };
        this.props.showLoading();
        this.props.userLogin(postData);
    }
  }


  signInWithFacebook(){
    LoginManager.logInWithReadPermissions(['public_profile']).then(
        function(result) {
          if (result.isCancelled) {
            alert('Login cancelled');
          } else {
              Actions.dashboardScreen({type:'reset'});
            alert('Login success with permissions: '
              +result.grantedPermissions.toString());
          }
        },
        function(error) {
          alert('Login fail with error: ' + error);
        }
      );
}

signInWithGooglePlus(){
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
      console.log(user);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
.done();
}

onUserNameChange(text) {

    this.props.loginUserNameChanged(text);
    this.setState({ errorMsg: '' });
    this.setState({ errorOnTextField: '' });
}

onPasswordChange(text) {

    this.props.loginPasswordChanged(text);
    this.setState({ errorMsg: '' });
    this.setState({ errorOnTextField: '' });
}

    

    

    
    render() {
        return (
            <View style={SignInStyle.signInContainer}>
            <View>
            {
                            this.state.errorMsg != '' && this.state.errorOnTextField == 0 ? <Text style={CommonStyles.errorText}>{this.state.errorMsg}</Text> : null
            }
             <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="user" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    underlineColorAndroid='transparent'
                    returnKeyType='next'
                    placeholder={Strings.EMAIL_ADDRESS}
                    onChangeText={this.onUserNameChange.bind(this)}
                    value={this.props.signInReducer.userName}
                  />
                </View>
                
                <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="key" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    style={styles.input}
                    placeholder={Strings.PASSWORD}
                    underlineColorAndroid='transparent'
                    returnKeyType='done'
                    secureTextEntry={this.state.isPasswordVisible ? true : false}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.signInReducer.password}
                  />
                </View>
                        
            </View>
            <View style={SignInStyle.forgotPasswordContainer}>
            <Text style={SignInStyle.forgotTextStyle}>{Strings.FORGOT_PASSWORD}</Text>
            </View>
            <View style={SignInStyle.buttonContainer}>
            <TouchableOpacity onPress={() => this.signIn()} style={SignInStyle.buttonStyle}>
                    <Text style={SignInStyle.textStyle}>{Strings.SIGNIN}</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={() => this.signInWithFacebook()} style={SignInStyle.facebookbuttonStyle}>
                    <Icon size={20} color='white' name="facebook"/>
                    <Text style={SignInStyle.textStyle}>{Strings.SIGNIN_WITH_FACEBOOK}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.signInWithGooglePlus()} style={SignInStyle.googlebuttonStyle}>
                    <Icon size={20} color='white' name="google"/>
                    <Text style={SignInStyle.textStyle}>{Strings.SIGNIN_WITH_GOOGLE}</Text>
            </TouchableOpacity>
             
          
            </View>
            {
                    this.props.signInReducer.isScreenLoading ?
        
                        <View style={CommonStyles.circles}>
                            <Progress.CircleSnail color={[Colors.PROGRESS1, Colors.PROGRESS2, Colors.PROGRESS3]} />
                        </View>
                        : null
                    //
            }
            </View>
        );      
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
      },

      imageContainer: {
         flex:0.5,
        alignItems: 'center',
        justifyContent:'center',
      },

      image:{
        height:50,
        width:50,
      },
      headerContainer:{
        flex: 1,
        flexDirection: 'row',
      },
      searchSection:{
          flexDirection: 'row',
          marginLeft:10,
          marginTop:25,
          marginBottom:10
      },
      input:{
          flex:1,
          width: null,
          marginLeft:20,
          fontSize:15
          
      }
});

function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        signInReducer: state.signInReducer
    }
}


export default connect(
    mapStateToProps,
    {
        userLogin,
        loginUserNameChanged,
        loginPasswordChanged,
        showLoading,
        resetState,
        clearResponse
    }

)(SignInScreen)

