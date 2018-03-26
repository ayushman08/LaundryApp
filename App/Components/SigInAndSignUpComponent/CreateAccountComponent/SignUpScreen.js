import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    Platform,
    TextInput,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../../CommonStyle/CommonStyle';
import Colors from '../../../Constants/Colors';
import Strings from '../../../Constants/Strings';
import ImagePath from '../../../Constants/ImagesPath';
import SignUpStyle from './SignupScreenStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignInStyle from '../SignInComponent/SignInScreenStyle';
import Api from "../../../WooCommerce/Api";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { validateEmail } from '../../../Constants/CommonFunctions';

import {
    userRegistration,
} from "../../../Action/ActionCreators";

import {
    firstNameChanged,
    lastNameChanged,
    emailChanged,
    phoneNumberChanged,
    signUpPasswordChanged,
    confirmPasswordChanged,
    showLoading,
    resetState,
    userType,
    clearResponse
} from "./SignUpAction";
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

var signUpPostData = {};

class SignUpScreen extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            isAgree: false,
            userType: '',
            errorMsg: '',
            errorOnTextField: '',
        };
    }

    onFirstNameChange(text) {

        this.props.firstNameChanged(text);
        this.setState({ errorMsg: '' });
        this.setState({ errorOnTextField: '' });
    }

    onEmailChange(text) {

        this.props.emailChanged(text);
        this.setState({ errorMsg: '' });
        this.setState({ errorOnTextField: '' });
    }

    onPhoneNumberChange(text) {

        this.props.phoneNumberChanged(text);
        this.setState({ errorMsg: '' });
        this.setState({ errorOnTextField: '' });
       
       
    }

    onPasswordChange(text) {

        this.props.signUpPasswordChanged(text);
        if(text==''){
            this.setState({ errorMsg: '' });
            this.setState({ errorOnTextField: '' });
        }
      
    }


signUp(){
    if (this.props.signUpReducer.firstName== '') {

        this.setState({ errorMsg: Strings.ERROR_EMPTY_FIRST_NAME });
        this.setState({ errorOnTextField: 0 });
    } 
    else if (this.props.signUpReducer.email=='') {

        this.setState({ errorMsg: Strings.ERROR_INVALID_EMAIL });
        this.setState({ errorOnTextField: 2 });
    }

    else if (this.props.signUpReducer.phoneNumber.trim() == '') {

        this.setState({ errorMsg: Strings.ERROR_EMPTY_PHONE_NUMBER });
        this.setState({ errorOnTextField: 3 });
    }

    else if (this.props.signUpReducer.phoneNumber.length != 10) {

        this.setState({ errorMsg: Strings.ERROR_INVALID_PHONE_NUMBER });
        this.setState({ errorOnTextField: 3 });
    }
    else if (this.props.signUpReducer.password.trim() == '') {

        this.setState({ errorMsg: Strings.ERROR_EMPTY_PASSWORD });
        this.setState({ errorOnTextField: 4 });
    }


    else {

        signUpPostData = {

            email: this.props.signUpReducer.email,
            password: this.props.signUpReducer.password,
            name: this.props.signUpReducer.firstName,
            mobile_no: this.props.signUpReducer.phoneNumber

        };
        console.log('singup post data== ',JSON.stringify(signUpPostData));
        this.props.showLoading();
        this.props.userRegistration(signUpPostData);
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
  
   

    render() {
        // let { firstName } = this.state

        return (
            <View style={{flex:1}}>
            <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'} showsVerticalScrollIndicator={false} contentContainerStyle={SignUpStyle.scrollViewContainerStyle}>
            <View>
            {
            this.state.errorMsg != ''? <Text style={CommonStyles.errorText}>{this.state.errorMsg}</Text> : null
            }

            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="user" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    style={styles.input}
                    placeholder={Strings.NAME}
                    placeholderTextColor = "grey"
                    returnKeyType='next'
                    onChangeText={this.onFirstNameChange.bind(this)}
                    value={this.props.signUpReducer.firstName}
                   
                  />
            </View>
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="envelope" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    style={styles.input}
                    placeholder={Strings.EMAIL}
                    placeholderTextColor = "grey"
                    returnKeyType='next'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.signUpReducer.email}
                
                    
                  />
            </View>
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="phone" size={20} color={Colors.THEME_COLOR} />
                <TextInput
                    style={styles.input}
                    placeholderTextColor = "grey"
                    placeholder={Strings.PHONE_NUMBER}
                    returnKeyType='next'
                    onChangeText={this.onPhoneNumberChange.bind(this)}
                    value={this.props.signUpReducer.phoneNumber}
                 
                   
                  />
            </View>
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="key" size={20} color={Colors.THEME_COLOR} />
                <TextInput
                    style={styles.input}
                    placeholderTextColor = "grey"
                    placeholder={Strings.PASSWORD}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.signUpReducer.password}
                   
                    
                  />
            </View>
            </View>
            </KeyboardAwareScrollView>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => this.signUp()} style={SignInStyle.buttonStyle}>
                    <Text style={SignInStyle.textStyle}>{Strings.SIGNUP}</Text>
                </TouchableOpacity>
                <Text style={{marginTop:10}}>OR</Text>
                <TouchableOpacity onPress={() => this.signInWithFacebook()} style={SignInStyle.facebookbuttonStyle}>
                    <Icon size={20} color='white' name="facebook"/>
                    <Text style={SignInStyle.textStyle}>{Strings.SIGNIN_WITH_FACEBOOK}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.signInWithGooglePlus()} style={SignInStyle.googlebuttonStyle}>
                    <Icon size={20} color='white' name="google"/>
                    <Text style={SignInStyle.textStyle}>{Strings.SIGNIN_WITH_GOOGLE}</Text>
            </TouchableOpacity>
          
            </View>
            </View>      
                          

                          
        );
    }
}

const styles = StyleSheet.create({
    
      searchSection:{
          flexDirection: 'row',
          marginLeft:10,
          marginTop:20,
          marginBottom:10
      },
      input:{
          marginLeft:20,
          fontSize:15
          
      }
});

function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        signUpReducer: state.signUpReducer
    }
}


export default connect(
    mapStateToProps,
    {
        userRegistration,
        firstNameChanged,
        lastNameChanged,
        emailChanged,
        phoneNumberChanged,
        signUpPasswordChanged,
        confirmPasswordChanged,
        showLoading,
        resetState,
        userType,
        clearResponse
    }

)(SignUpScreen)