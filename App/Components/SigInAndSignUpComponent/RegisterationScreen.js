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


import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../CommonStyle/CommonStyle';
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import ImagePath from '../../Constants/ImagesPath';
import SignInScreen from './SignInComponent/SignInScreen';
import SignUpScreen from './CreateAccountComponent/SignUpScreen';
import SignInStyle from './SignInComponent/SignInScreenStyle';
import { View,Container, Header, Content, Tab, Tabs  } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

var postData = {};

class RegisterationScreen extends Component {

    constructor() {
        super();
        this.state = {
            isKeepSignedIn: false,
            isPasswordVisible: true,
            errorMsg: '',
            errorOnTextField: '',
            signIn:true,

        };
    }

    onChangeContainer() {

        if (this.state.signIn) {

            this.setState({ signIn: false });
        }
        else {

            this.setState({ signIn: true });
        }
    }


    

    

    
    render() {
        const { container,headerImageContainer, imageStyle, tabContainer,textStyle,
            signInAndSignUpContainer} = styles
        return (
           <View style={container}>
               <View style={headerImageContainer}>
               <Image source={ImagePath.LOGO} style={imageStyle}/>
                </View>
                <View style={tabContainer}>
                <TouchableOpacity onPress={() => this.onChangeContainer()}>
                    <Text style={textStyle}>SIGNIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onChangeContainer()}>
                    <Text style={textStyle}>SIGNUP</Text>
                </TouchableOpacity>
                 </View>  
                 <View style={signInAndSignUpContainer}>
               
                    {
                        this.state.signIn == true
                            ?
                           <SignInScreen />
                            :
                            <SignUpScreen />

                    }
                
                 </View> 
            </View>
        );      
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
      },
      headerImageContainer:{
        flex:0.5,
        width: null,
        alignItems: 'center',
        justifyContent: 'center'
      },
     
      tabContainer:{
          flex:0.1,
         width:null,
         height:10,
         flexDirection: 'row',
         justifyContent: 'space-around',
         padding: 15 
      },
      textStyle:{
          fontSize: 18,
          fontStyle: 'normal',
          fontWeight:'800',
          color: Colors.DARK_BLUE
      },
      signInAndSignUpContainer:{
          flex:1,
          width:null,
          marginLeft:20
        
      }
      
});


export default RegisterationScreen;
