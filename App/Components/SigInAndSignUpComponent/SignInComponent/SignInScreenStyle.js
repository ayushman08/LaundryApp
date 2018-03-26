import {
  StyleSheet,
  Platform,
} from 'react-native';
import Colors from '../../../Constants/Colors';
import COLORS from '../../../Constants/Colors';
export default StyleSheet.create({


  textStyle: {
    color: Colors.WHITE,
    backgroundColor: Colors.TRANSPARENT,
    fontSize: 14,
    fontWeight: '500',

  },
  passwordVisibiltyViewStyle: {
    position: 'absolute',
    right: 10,
    paddingLeft: 10,
    paddingBottom: 30,
    paddingTop: 10,
    marginTop:5,
    marginLeft:5,
    marginBottom:5,
    bottom: 20
  },

  forgotTextStyle: {
    color: Colors.DARK_BLUE,
    backgroundColor: Colors.TRANSPARENT,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    marginRight:10
  },

  headingTextstyle:{
    color: Colors.BLACK,
    backgroundColor: Colors.TRANSPARENT,
    fontSize: 20,
    fontWeight: '500',
  },

  forgotPasswordContainer:{
    alignItems: 'flex-end'
  },


  scrollViewContainerStyle: {
    paddingBottom: 60
  },

  signedInCheckBoxViewStyle: {
    marginTop: 38,
    width: 150,
  },

  signInContainer: {
    flex:1
  },
  textStyle:{
    fontSize: 18,
    fontWeight:'800',
    fontStyle: 'normal',
    marginLeft:10,
    color:'white'
    
},
buttonContainer:{
  
  alignItems: 'center',
  marginTop:30
 
},
buttonStyle:{
  width:350,
  marginTop:20,
  height:45,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth:0.5,
  borderRadius:20,
  borderColor:Colors.DARK_BLUE,
  backgroundColor:Colors.DARK_BLUE,

},

facebookbuttonStyle:{
  width:350,
  marginTop:15,
  height:45,
  flexDirection:'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth:0.5,
  borderRadius:20,
  borderColor:'#3b5998',
  backgroundColor:'#3b5998',
},
googlebuttonStyle:{
  width:350,
  marginTop:10,
  marginBottom:10,
  height:45,
  flexDirection:'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth:0.5,
  borderRadius:20,
  borderColor:'#DD4B39',
  backgroundColor:'#DD4B39',
},

});