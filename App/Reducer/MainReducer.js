import { combineReducers } from 'redux';
import SignInReducer from '../Components/SigInAndSignUpComponent/SignInComponent/SignInReducer';
import HomeReducer from '../Components/HomeScreen/HomeReducer';
import LogoutReducer from '../Components/LogoutComponent/LogoutReducer';
import SignUpReducer from '../Components/SigInAndSignUpComponent/CreateAccountComponent/SignUpReducer';

export default combineReducers({

	signInReducer: SignInReducer,
	homeReducer: HomeReducer,
	logoutReducer: LogoutReducer,
	signUpReducer: SignUpReducer

});
