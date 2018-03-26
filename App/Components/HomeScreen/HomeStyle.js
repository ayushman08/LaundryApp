import {
    StyleSheet,
    Platform,
    Dimensions
  } from 'react-native';
  import Colors from '../../Constants/Colors';
  const window = Dimensions.get('window');
  export default StyleSheet.create({
  

    headerViewStyle: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingLeft: 25,
      paddingRight: 25
    },
    imageViewContainer:{
      borderWidth:3,
      borderRadius:90/2,
      padding:5,
      margin:10,
      height:90,
      width:90,
      borderColor:Colors.THEME_COLOR,
      justifyContent:'center',
      alignItems:'center'
  },
  itemContainer:{
      backgroundColor:'white',
      elevation:2,
      margin:5,
      justifyContent:'center',
      alignItems:'center',
      height:250,
      width:180
  },
  itemProductTitle:{
    color:Colors.DARK_BLUE,
    fontWeight:"800",
    fontSize:15,
    alignSelf:'center',
    padding:5

  }
   
  });