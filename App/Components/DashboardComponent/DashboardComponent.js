import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View, Image, TouchableOpacity, Dimensions, AsyncStorage, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    List,
    ListItem,
    StyleProvider
} from 'native-base';
import Drawer from 'react-native-drawer';
const routes = ['Home', 'Chat', 'Profile'];
import DashboardStyle from './DashboardScreenStyle';
import ImagePath from '../../Constants/ImagesPath';
import CommonStyles from '../../CommonStyle/CommonStyle';
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import Home from '../HomeScreen/Home';
import Profile from '../ProfileComponent/Profile';
import HomeStyle from '../HomeScreen/HomeStyle';
import DashboardScreenStyle from './DashboardScreenStyle';
import getTheme from '../../../native-base-theme/components';
import IconFont from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont2 from 'react-native-vector-icons/FontAwesome';

import {
	userLogout
} from '../../Action/ActionCreators';

import {
	logout,
	showLoading,
	resetState,
} from '../LogoutComponent/LogoutAction';

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
};

const windowStyle = Dimensions.get('window');


class DashboardComponent extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0,
            previousTab: 0,
            userInfo: {},
            selectedMenuItem: Strings.DASHBOARD,
            userPermission: [],
            roleName: '',
            statisticsData: {},
            title: 'Services'

        };
    }

    componentWillMount() {
        AsyncStorage.getItem('LaundryCustomerInfo').then((value) => {
			if (value) {
				const userData = JSON.parse(value);
				this.setState({ userInfo: userData });
			}
		}).done();
    }

    componentDidUpdate() {
      this.onLogoutSuccess();
    }

    closeControlPanel = () => {
        this._drawer.close();
    };

    openControlPanel = () => {
        this._drawer.open();
    };

    navBar() {
        return (
            <StyleProvider style={getTheme()}> 
            <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.openControlPanel()}
              >
                <IconFont name="menu" size={30} color='white' />
              </Button>
            </Left>
            <Body>
              <Title>{this.state.title}</Title>
            </Body>
            <Right />
          </Header>
          </StyleProvider>
        );
    }
    changeTodashboard() {
		this.setState({ selectedMenuItem: Strings.DASHBOARD, title: Strings.DASHBOARD });
		this.closeControlPanel();
    }
    
    changeTomyProfile() {
		this.setState({ selectedMenuItem: Strings.MY_PROFILE, title: Strings.MY_PROFILE });
		this.closeControlPanel();
    }
    
    changeToOrderList() {
		this.setState({ selectedMenuItem: Strings.ORDER_LISTING, title: Strings.ORDER_LISTING });
		this.closeControlPanel();
    }
    

    confirmUserLogout() {
		Alert.alert(
			Strings.APP_NAME,
			Strings.LOGOUT_CONFIRMATION_MSG,
			[
				{ text: Strings.YES, onPress: () => this.onLogout() },
				{ text: Strings.NO, onPress: () => console.log('Logout Denied') },
			],
			{ cancelable: false }
		);
    }
    
    onLogout() {
		//console.log('userdata:', this.state.userInfo);
		if (this.state.userInfo.data) {
			//console.log('userdata:', this.state.userInfo.data + ' ' + this.state.userInfo.data.user_id);
			logoutPostData = {
				token: this.state.userInfo.data.token
			};
			this.props.showLoading();
			this.props.userLogout(logoutPostData);
		}
    }
    
    onLogoutSuccess() {
		if (this.props.logoutReducer.logoutResponse != '') {
			if (this.props.logoutReducer.logoutResponse.success) {
                Actions.registerScreen({ type: 'reset' });
				AsyncStorage.clear();
			} else {
				//alert(this.props.logoutReducer.logoutResponse.message);

			}
			this.props.resetState();
		}
	}


    drawerContentView() {
        return (
        <View style={DashboardStyle.drawerContentView}>
            <View style={DashboardStyle.headerViewStyle}>
             <Image style={DashboardScreenStyle.drawerImageStyle} resizeMode="cover" source={ImagePath.DASHBOARD_BANNER} />
             <TouchableOpacity style={DashboardScreenStyle.drawerCrossIconStyle} onPress={() => this.closeControlPanel()}>
             <Image source={ImagePath.DRAWER_CROSS_ICON} />
             </TouchableOpacity>
            <View style={DashboardScreenStyle.userImageViewStyle}>
            <Image style={DashboardStyle.userImageStyle} resizeMode="cover" source={{ uri: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg' }} />
            </View>     
            <TouchableOpacity style={DashboardScreenStyle.drawerPenIconStyle} onPress={() => this.closeControlPanel()}>
                    <IconFont2 name="edit" size={25} color={Colors.GREEN} />
            </TouchableOpacity>
            </View>

                	<View style={DashboardStyle.drawerItemViewContainer}>
                    <TouchableOpacity onPress={() => this.changeTomyProfile()} style={this.state.selectedMenuItem == Strings.TENANTS ? DashboardStyle.selectedMenuItemBackgroundStyle : DashboardStyle.menuItemBackgroundStyle}>
										<View style={DashboardStyle.drawerMenuItemViewStyle}>
											<IconFont2 name="user" size={25} color={Colors.DARK_BLUE} />
											<View style={DashboardStyle.drawerItemTextViewStyle}>
												<Text style={DashboardStyle.drawerItemText}>{Strings.MY_PROFILE}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeTodashboard()} style={this.state.selectedMenuItem == Strings.TRADERS ? DashboardStyle.selectedMenuItemBackgroundStyle : DashboardStyle.menuItemBackgroundStyle}>
										<View style={DashboardStyle.drawerMenuItemViewStyle}>
                                        <IconFont2 name="tachometer" size={25} color={Colors.DARK_BLUE} />
											<View style={DashboardStyle.drawerItemTextViewStyle}>
												<Text style={DashboardStyle.drawerItemText}>{Strings.DASHBOARD}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeToOrderList()()} style={this.state.selectedMenuItem == Strings.AGENTS ? DashboardStyle.selectedMenuItemBackgroundStyle : DashboardStyle.menuItemBackgroundStyle}>
										<View style={DashboardStyle.drawerMenuItemViewStyle}>
                                        <IconFont name="book-multiple" size={25} color={Colors.DARK_BLUE} />
											<View style={DashboardStyle.drawerItemTextViewStyle}>
												<Text style={DashboardStyle.drawerItemText}>{Strings.ORDER_LISTING}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onMyFile()} style={this.state.selectedMenuItem == Strings.MYFILE ? DashboardStyle.selectedMenuItemBackgroundStyle : DashboardStyle.menuItemBackgroundStyle}>
										<View style={DashboardStyle.drawerMenuItemViewStyle}>
                                        <IconFont name="information" size={25} color={Colors.DARK_BLUE} />
											<View style={DashboardStyle.drawerItemTextViewStyle}>
												<Text style={DashboardStyle.drawerItemText}>{Strings.ABOUT_US}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => this.confirmUserLogout()} style={this.state.selectedMenuItem == Strings.MYFILE ? DashboardStyle.selectedMenuItemBackgroundStyle : DashboardStyle.menuItemBackgroundStyle}>
										<View style={DashboardStyle.drawerMenuItemViewStyle}>
                                        <IconFont name="logout" size={25} color={Colors.DARK_BLUE} />
											<View style={DashboardStyle.drawerItemTextViewStyle}>
												<Text style={DashboardStyle.drawerItemText}>{Strings.LOGOUT}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    </View>
            </View>
        );
    }

    _showSelectedScreen() {
        return (
        <View style={{ flex: 1 }}>
        {this.navBar()}
        {this.staticView()}
        </View>
        );
    }

    staticView() {
        console.log('Dashboard', this.state.selectedMenuItem);
        if (this.state.selectedMenuItem == Strings.DASHBOARD) {
           console.log('Dashboard', this.state.selectedMenuItem);
            return (
                
                <Home />
         
             
        );
        } else if (this.state.selectedMenuItem == Strings.MY_PROFILE) {
            return (
                <Profile />
        );
        } else if (this.state.selectedMenuItem == Strings.ORDER_LISTING) {
            return (
                <View>
                  <Text>ORDER_LISTING</Text>
                </View>
        );
        }
    }

    render() {
        return (

            <View style={{ flex: 1 }}>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    type="overlay"
                    content={this.drawerContentView()}
                    tapToClose
                    openDrawerOffset={0.0} // 20% gap on the right side of drawer
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    styles={drawerStyles}
                    acceptTap
                    tweenHandler={(ratio) => ({
                        main: { opacity: (2 - ratio) / 2 }
                    })}
                >
                    {this._showSelectedScreen()}
                </Drawer>
            </View>
        );
    }
}

function mapStateToProps(state) {
	console.log('mapStateToProps= ', JSON.stringify(state));
	return {
		logoutReducer: state.logoutReducer,
	};
}

export default connect(
	mapStateToProps,
	{
		userLogout,
		showLoading,
		resetState,
	}

)(DashboardComponent);
