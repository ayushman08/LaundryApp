import React, { Component } from 'react';

import {
    Image,
    View,
    AsyncStorage
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../CommonStyle/CommonStyle';
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import ImagePath from '../../Constants/ImagesPath';

class SplashScreen extends Component {

    constructor() {
        super();
        this.state = {
            accessToken: '',
        };
    }

    componentWillMount() {

     

        setTimeout(() => {
            Actions.registerScreen();
        }, 2000);
    }

    render() {
        return (
            <View  style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Image source={ImagePath.LOGO}>
            </Image>
            </View>
        );
    }

}

export default SplashScreen;
