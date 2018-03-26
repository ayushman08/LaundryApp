import { put, call, takeEvery, takeLatest, select, cps } from 'redux-saga/effects';
import API from '../Constants/APIUrls';
import API_CONST from '../Constants/APIConstants';
import ACTION_TYPES from '../Action/ActionsType';
import Api from "../WooCommerce/Api";
//import RNFetchBlob from 'react-native-fetch-blob';


//Call for fetching data from api
const _apiCall = (url, data) => {
	console.log('Api request',data);
	return fetch(url, data)
		.then((res) => {
			console.log('Api response',res);
			return { res: res, res_json: res.json() };
		})
		.catch((e) => {
			throw e;
		});
};

const _woocomerce = (url) => {
	return Api.get(url)
	.then((data) => {
		console.log("DATA>>>>> "+JSON.stringify(data));
		return data;
	})
	.catch((e) => {
		throw e;
	});
}

//get response json
const _extJSON = (p) => {
	return p.then((res) => res);
};


function* getProductCategory() {
	try {

		let response = yield call(_woocomerce, API.GET_PRODUCT_CATEGORY);
		//console.log('1. getPropertyDetail res: ' + JSON.stringify(response));
		//var responseJSON = yield call(_extJSON, response.res_json);
		//console.log('getPropertyDetail res: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.GET_PRODUCT_CATEGORY_LIST,
			payload: response
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}

function* userLogin(action) {
	var postData = action.data;
	const formData = new FormData();
	  formData.append('username', postData.username);
	  formData.append('password', postData.password);

	try {
		let response = yield call(_apiCall, API.USER_LOGIN, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: formData
		});
		var responseJSON = yield call(_extJSON, response.res_json);
		console.log('Response: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.LOGIN_USER_RES,
			payload: responseJSON
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}

function* userRegistration(action) {

	var postData = action.data;
	const formData = new FormData();
	  formData.append('email_address', postData.email);
	  formData.append('password', postData.password);
	  formData.append('phone', postData.phone);
	  formData.append('username', postData.username);

	try {
		let response = yield call(_apiCall, API.USER_REGISTRATION, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postData)
		});
		var responseJSON = yield call(_extJSON, response.res_json);
		//console.log('userRegistration rolse: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.SIGNUP_USER_RES,
			payload: responseJSON
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}


function* userLogout(action) {
	var postData = action.data;
	const formData = new FormData();
	  formData.append('token', postData.token);

	try {
		let response = yield call(_apiCall, API.USER_LOGOUT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: formData
		});
		var responseJSON = yield call(_extJSON, response.res_json);
		console.log('Response: ' + JSON.stringify(responseJSON));
		yield put({
			type: ACTION_TYPES.LOGOUT_USER_RES,
			payload: responseJSON
		});
	} catch (e) {
		//console.log('Error: ' + e);
	}
}


function* rootSaga() {

	//Login
	yield takeLatest(API_CONST.N_USER_LOGIN, userLogin);
	yield takeLatest(API_CONST.N_GET_PRODUCT_CATEGORY, getProductCategory);
	yield takeLatest(API_CONST.N_USER_LOGOUT, userLogout);

}

export default rootSaga;
