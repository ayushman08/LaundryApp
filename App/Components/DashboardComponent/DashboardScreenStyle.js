import {
  StyleSheet,
  Platform,
} from 'react-native';
import Colors from '../../Constants/Colors';
export default StyleSheet.create({

  drawerContentView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerViewStyle: {
    flex:0.6,
    width:null,
    backgroundColor:'black',
    height:null
  },
  searchViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchImageStyle: {
    marginRight: 20
  },

  userImageViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    alignSelf:'center'
   
  },
  userImageStyle: {
    width: 100,
    height: 100,
    alignSelf:'center',
    marginTop:50,
    borderRadius: 100/2,
    
   
  },
  userNameTextStyle: {
    height: 23,
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 23,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 3,

  },
  userEmailTextStyle: {
    color: '#7F829F',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 3,
  },
  roundedBlueSwitchButtonStyle: {
    width: 166,
    borderRadius: 100,
    height: 40,
    backgroundColor: Colors.SKY_BLUE_BUTTON_BACKGROUND,
    justifyContent: 'center',
    marginTop: 17,
  },

  swithButtonTextStyle: {
    color: Colors.WHITE,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 25,
    marginRight: 25,
  },

  drawerMenuItemViewStyle: {
    paddingLeft: 25,
    margin:10,
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
  },

  drawerItemText:
    {
      color: Colors.FONT_COLOR, fontSize: 16, fontWeight: '500'
    },

  drawerItemViewContainer: {
    marginTop: 40
  },

  drawerItemTextViewStyle: {
    marginLeft: 30
  },
  selectedMenuItemBackgroundStyle: {
    backgroundColor: Colors.TRANSPARENT_BLACK_BUTTON_BACKGROUND,
  },
  menuItemBackgroundStyle: {
    backgroundColor: Colors.TRANSPARENT,
  },
  noticeBoardContainerViewStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
    paddingBottom: window.height * 0.3,
  },
  managePropertyTextStyle: {
    color: Colors.LIGHT_GRAY_TEXT_COLOR,
    fontSize: 20,
    paddingLeft: 5,
    fontWeight: '500'
  },
  statisticsViewContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  statisticsLabelTextStyle: {
    textAlign: 'left',
    flex: 1,
    color: Colors.LIGHT_GRAY_TEXT_COLOR,
    fontSize: 20,
  },
  statisticsTextStyle: {
    textAlign: 'right',
    color: Colors.PROPERTY_TITLE_COLOR,
    fontSize: 20,
    flex: 1,
    fontWeight: 'bold',
  },
  scrollViewStyle: {
    flex:1,
    paddingBottom:80,

  },

  //new added styles

  drawerImageStyle:{
    flex:1,
    width:null,
    height:null,
    
  },
  drawerCrossIconStyle: {
    position:'absolute',
    alignSelf:'flex-end',
    padding:20
  },

  drawerPenIconStyle: {
    position:'absolute',
    height:100,
    width:30,
    right:10,
    alignSelf:'flex-end',
    justifyContent:'flex-end',
    top:80
  }
});