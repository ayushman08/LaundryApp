import React, {Component} from 'react'
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Dimensions,
    FlatList,
    ScrollView,
    Image,
    Alert
} from 'react-native'

import {
    getProductCategory,
} from "../../../App/Action/ActionCreators";
import {

    showLoading,
    resetState,
} from "./HomeAction";

const {width, height} = Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeStyle from '../HomeScreen/HomeStyle'
import Api from "../../WooCommerce/Api";
import CommonStyles from '../../CommonStyle/CommonStyle';
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import ImagePath from '../../Constants/ImagesPath';
import * as Progress from 'react-native-progress';
import Card from '../../../native-base-theme/components/Card';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            data: '',
            productList:[]
        }
    }

    componentWillMount(){
        this.props.showLoading();
        this.props.getProductCategory();
    }

    componentDidUpdate(){
        
    }

    
    onProductListSuccess() {
        if (this.props.homeReducer.productCategoryList != '') {
            this.setState({ productList: this.props.homeReducer.productCategoryList });
         }else {
            alert("Cannot retrieve product list");
        }
        this.props.resetState();
    }

  
    
    deleteData(){
        this.setState({text: '', data: ''})
    }
    _renderItem(item){
       
        return (
            <TouchableHighlight underlayColor={Colors.DARK_BLUE} onPress={this.navigateTocategory.bind(this, item.key)}>
            <View style={HomeStyle.itemContainer}>
            <View style={HomeStyle.imageViewContainer}>
            <Image key={item.key} style={styles.image} source={{uri: item.images[0].src} }  />
            </View>
            <Text style={HomeStyle.itemProductTitle}>{item.name}</Text>
            <Text style={{alignSelf:'center',padding:5,color:Colors.FONT_COLOR}}>Up To {item.price} SEK</Text>
            </View>   
          
            {/* */}
          </TouchableHighlight>
        )
    }

    navigateTocategory(item){
        Alert.alert("Hii");
    }

    render(){
        return (
            <View style={styles.container}>
            <View style={{flex:0.4}}>
            <Text style={{position:'absolute',zIndex:5,color:'white',fontSize:25,fontWeight:'500',alignSelf:'center',top:50}}>Laundry Day Done</Text>
            <Image source={ImagePath.DASHBOARD_BANNER} style={{alignSelf:'center'}}/>
            </View>
    
                <ScrollView style={{alignSelf:'center'}}>
                    <FlatList 
                        style={{marginHorizontal: 5}}
                        data={this.props.homeReducer.productCategoryList}
                        numColumns={2}
                        columnWrapperStyle={{marginTop: 5, marginLeft: 5}}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </ScrollView>
        
             {
            this.props.homeReducer.isScreenLoading ?
                <View style={CommonStyles.circles}>
                 <Progress.CircleSnail color={[Colors.BLACK, Colors.BLACK, Colors.BLACK]} />
            </View>
             : null

            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        backgroundColor: Colors.HOME_BG
    },
    image: {
        width: 80,
        height: 80,
        alignSelf:'center'
        
       
    }
})

function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        homeReducer: state.homeReducer
    }
}


export default connect(
    mapStateToProps,
    {
         getProductCategory,
         showLoading
    }

)(Home)