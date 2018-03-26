import API_CONST from '../Constants/APIConstants';

//For user login
export const userLogin = (data) => {
  return {
    type: API_CONST.N_USER_LOGIN,
    data
  };
};

//For product category list
export const getProductCategory = (data) => {
  return {
    type: API_CONST.N_GET_PRODUCT_CATEGORY,
    data
  };
};

//For forgot password
export const forgotPassword = (data) => {
  return {
    type: API_CONST.N_USER_FORGOT_PASSWORD,
    data
  };
};

//For forgot password
export const resendPassword = (data) => {
  console.log("response data :" + JSON.stringify(data));
  return {
    type: API_CONST.N_USER_RESEND_PASSWORD,
    data
  };
};

//For user registration
export const userRegistration = (data) => {
  return {
    type: API_CONST.N_USER_REGISTRATION,
    data
  };
};

//For user logout
export const userLogout = (data) => {
  return {
    type: API_CONST.N_USER_LOGOUT,
    data
  };
};

//For get property list
export const getPropertyList = (token, data) => {
  console.log('property list= ', token);
  return {
    type: API_CONST.N_GET_PROPERTY,
    token,
    data
  };
};

//For get amenities list
export const getAmenitiesList = (token) => {
  console.log('amenities list= ', token);
  return {
    type: API_CONST.N_GET_AMENITIES,
    token
  };
};

//For get user rolse list
export const getUserRolesList = () => {

  return {
    type: API_CONST.N_GET_USER_ROLES,

  };
};

//For get user rolse list
export const getUserActiveRolesList = (token, data) => {

  return {
    type: API_CONST.N_GET_USER_ACTIVE_ROLES,
    token,
    data
  };
};

//For add property
export const addProperty = (token, data) => {
  console.log('addProperty = ', JSON.stringify(data));
  return {
    type: API_CONST.N_ADD_PROPERTY,
    token,
    data
  };
};

//For upload property image
export const uploadImage = (token, data) => {
  console.log('token = ', token);
  console.log('uploadImage = ', JSON.stringify(data));
  return {
    type: API_CONST.N_UPLOAD_PROPERTY_IMAGE,
    token,
    data
  };
};

//For get property owner list
export const getPropertyOwnerList = (token, data) => {
  console.log('getPropertyOwnerList = ', JSON.stringify(data));
  return {
    type: API_CONST.N_PROPERTY_OWNER_LIST,
    token,
    data
  };
};

//For get tenant list
export const getTenantList = (token, data,APIS) => {
  console.log('property list= ', token);
  return {
    type: API_CONST.N_GET_TENANT_LIST,
    token,
    data,
    APIS
  };
};

//For get tenant list
export const getTradersList = (token, data) => {

  return {
    type: API_CONST.N_GET_TRADERS_LIST,
    token,
    data
  };
};


//For get tenant list
export const sendMessage = (token, data) => {

  return {
    type: API_CONST.N_SEND_MESSAGE,
    token,
    data
  };
};


//For get property agents
export const getPropertyByAgent = (token, data) => {

  return {
    type: API_CONST.N_GET_PROPERTY_BY_AGENT,
    token,
    data
  };
};
//For add tanent
export const addTanent = (token, data) => {

  return {
    type: API_CONST.N_ADD_TENANT,
    token,
    data
  };
};

//get tenant profile
export const getTenantProfile = (token, data) => {

  return {
    type: API_CONST.N_GET_TENANT_PROFILE,
    token,
    data
  };

};

//get traders profile
export const getTradersProfile = (token, data) => {

  return {
    type: API_CONST.N_GET_TRADERS_PROFILE,
    token,
    data
  };

};

//For add property owner
export const addPropertyOwner = (token, data) => {

  return {
    type: API_CONST.N_ADD_PROPERTY_OWNER,
    token,
    data
  };
};

//For add property owner
export const getPropertyDetail = (token, data) => {

  return {
    type: API_CONST.N_GET_PROPERTY_DETAIL,
    token,
    data
  };
};
//For add property owner
export const getUserRoles = (token, data) => {

  return {
    type: API_CONST.N_GET_USER_ROLES_SWITCH_PROFILE,
    token,
    data
  };
};

//For upolad image list
export const uploadUserImage = (token, data, _id) => {
  console.log('token = ', token);
  console.log('uploadImage = ', JSON.stringify(data));
  return {
    type: API_CONST.N_UPLOAD_USER_IMAGE,
    token,
    data,
    _id
  };
};

//like property
export const likeProperty = (token, data) => {

  return {
    type: API_CONST.N_LIKE_PROPERTY,
    token,
    data
  };
};

//get user permission
export const getUserPermission = (token, data) => {

  return {
    type: API_CONST.N_GET_USER_PERMISSION,
    token,
    data
  };
};

//get user profile
export const getLoggedInUserProfile = (token, data) => {

  return {
    type: API_CONST.N_GET_USER_PROFILE,
    token,
    data
  };

};


//For save property as draft
export const savePropertyAsDraft = (token, data) => {
  console.log('savePropertyAsDraft = ', JSON.stringify(data));
  return {
    type: API_CONST.N_SAVE_PROPERTY_AS_DRAFT,
    token,
    data
  };
};

//For get user image list
export const getUserImage = (token, data) => {
  console.log('token = ', token);
  console.log('user post data = ', JSON.stringify(data));
  return {
    type: API_CONST.N_GET_USER_IMAGE,
    token,
    data
  };
};

//For update image list
export const updateUserImage = (token, data, _id) => {
  console.log('token = ', token);

  return {
    type: API_CONST.N_UPDATE_USER_IMAGE,
    token,
    data,
    _id
  };
};

//For get user details
export const getUserDetails = (token, data) => {
  return {
    type: API_CONST.N_GET_USER_DETAILS,
    token,
    data
  };
};


//For get user details
export const updateUserDetails = (token, data) => {
  return {
    type: API_CONST.N_UPDATE_USER_DETAILS,
    token,
    data
  };
};

//For change password
export const changePassword = (token, data) => {
  return {
    type: API_CONST.N_CHANGE_PASSWORD,
    token,
    data
  };
};

//For change password
export const changeNotificationSetting = (token, data) => {
  return {
    type: API_CONST.N_CHANGE_NOTIFICATION,
    token,
    data
  };
};

//For add property owner
export const getPropertyDetailForUpdate = (token, data) => {

  return {
    type: API_CONST.N_GET_PROPERTY_DETAIL_FOR_UPDATE,
    token,
    data
  };
};



//For get traders option
export const getTradersOptionList = (token, data) => {

  return {

    type: API_CONST.N_GET_TRADERS_OPTION_LIST,
    token,
    data

  };
};


//For get property list
export const getMaintenancePropertyList = (token, data) => {

  return {

    type: API_CONST.N_GET_AGENCY_PROPERTY_LIST,
    token,
    data

  };
};



//For get watcher list
export const getWatherList = (token, agencyId) => {

  return {

    type: API_CONST.N_GET_WATCHER_LIST,
    token,
    agencyId

  };
};

//For get maintenance req list by tenant
export const getMaintenanceReqByTenant = (token, data) => {

  return {
    type: API_CONST.N_GET_MAINTENANCE_REQ_BY_TENANT,
    token,
    data
  };
};


//For upolad maintenance image list
export const uploadMaintenaceImage = (token, data) => {
  console.log('token = ', token);
  console.log('uploadImage = ', JSON.stringify(data));
  return {
    type: API_CONST.N_UPLOAD_MAINTENANCE_IMAGE,
    token,
    data,
  };
};

//For upolad my files
export const uploadMyFileDoc = (token, data, id, docType, docName) => {
  console.log('token = ', token);
  console.log('uploadMyFileDoc = ', docType + ' ' + docName);
  return {
    type: API_CONST.N_UPLOAD_MYFILE_DOC,
    token,
    data,
    id,
    docType,
    docName
  };
};

//For add maintenance req 
export const addMaintenanceReq = (token, data) => {

  return {
    type: API_CONST.N_ADD_MAINTENANCE_REQ,
    token,
    data
  };
};

//For forward maintenance req 
export const forwardMaintenanceReq = (token, data) => {

  return {
    type: API_CONST.N_FORWARD_MAINTENANCE_REQ,
    token,
    data
  };
};

//For add maintenance req 
export const saveUserMultipleRoles = (token, data) => {

  return {
    type: API_CONST.N_SAVE_USER_MULTI_ROLE,
    token,
    data
  };
};

//For get notice board list
export const getNoticeBoardList = (token, data) => {
  //console.log('property list= ', token);
  return {
    type: API_CONST.N_GET_NOTICE_BOARD_LIST,
    token,
    data
  };
};


//For get maintenance detail req
export const getMaintenanceReqDetail = (token, id) => {

  return {

    type: API_CONST.N_GET_MAINTENANCE_DETAIL,
    token,
    id

  };
};

//For get unread message
export const getUnreadMessageList = (token, id) => {

  return {

    type: API_CONST.N_GET_UNREAD_MESSAGE_LIST,
    token,
    id

  };
};

//For get property owner list
export const getAgreementPropertyOwnerList = (token, id) => {

  return {

    type: API_CONST.N_GET_AGREEMENT_PROPERTY_OWNER_LIST,
    token,
    id

  };
};

//For get tenancies history
export const getTenanciesHistory = (token, id) => {

  return {

    type: API_CONST.N_GET_TENANCIES_HISTORY,
    token,
    id

  };
};

//For get agreement of property 
export const getAgreementOfProperty = (token, id) => {

  return {

    type: API_CONST.N_GET_AGREEMENT_FOR_PROPERTY,
    token,
    id

  };
};

//For get maintenance history in property detail
export const getMaintenaceHistory = (token, id) => {

  return {

    type: API_CONST.N_GET_MAINTENANCE_HISTORY_RES,
    token,
    id

  };
};

//For get notice board detail
export const getNoticeBoardDetail = (token, id) => {

  return {

    type: API_CONST.N_GET_NOTICE_BOARD_DETAIL_LIST_RES,
    token,
    id

  };
};

//For get property tenants list
export const getAgreementPropertyTenantsList = (token, id) => {

  return {

    type: API_CONST.N_GET_PROPERTY_TENANT_LIST,
    token,
    id

  };
};
//For delete agreement
export const deleteAgreement = (token, id) => {

  return {

    type: API_CONST.N_DELETE_AGREEMENT,
    token,
    id

  };
};
//For get agreement by property id
export const getAgreementByPropertyId = (token, id) => {
  console.log('getAgreementByPropertyId creators= ', id);
  return {

    type: API_CONST.N_GET_AGREEMENT_BY_PROPERTY,
    token,
    id

  };
};

//For get notification list
export const getNotificationList = (token, data) => {
  console.log('notifiaction list= ', token);
  return {
    type: API_CONST.N_GET_NOTIFICATION_LIST,
    token,
    data
  };
};
//For get uploaded document
export const getUploadedDocument = (token, data) => {

  return {
    type: API_CONST.N_GET_UPLOADED_DOCUMENTS,
    token,
    data
  };
};

//For get fav uploaded document
export const getFavUploadedDocument = (token, data) => {

  return {
    type: API_CONST.N_GET_FAV_UPLOADED_DOCUMENTS,
    token,
    data
  };
};

//For get fav uploaded document
export const addDocumentToFav = (token, data) => {

  return {
    type: API_CONST.N_ADD_DOCUMENT_TO_FAV,
    token,
    data
  };
};

//For get agreements list
export const getAgreementList = (token, data) => {

  return {
    type: API_CONST.N_GET_AGREEMENT_LIST,
    token,
    data
  };
};

//For get agreements property list
export const getAgreementPropertyList = (token, data) => {

  return {
    type: API_CONST.N_GET_AGREEMENT_PROPERTY_LIST,
    token,
    data
  };
};

//add agreement
export const addAgreement = (token, data) => {

  return {
    type: API_CONST.N_ADD_AGREEMENT,
    token,
    data
  };
};

//get statistics
export const getStatistics = (token, data) => {

  return {
    type: API_CONST.N_GET_STATISTICS,
    token,
    data
  };
};



//For get agreement detail
export const getAgreementDetail = (token, id) => {

  return {

    type: API_CONST.N_GET_AGREEMENT_DETAIL,
    token,
    id

  };
};

//For get user review list
export const getUserReviewsList = (token, id) => {

  return {

    type: API_CONST.N_GET_USER_REVIEW,
    token,
    id

  };
};

//For upolad agreement image 
export const uploadAgreementImage = (token, data,docName,docType) => {
  console.log('token = ', token);
  console.log('uploadImage = ', JSON.stringify(data));

  return {
    type: API_CONST.N_UPLOAD_AGREEMENT_DOC,
    token,
    data,
    docName,
    docType
  };
};


//For get meswsage list
export const getMessageList = (token, data) => {

  return {

    type: API_CONST.N_GET_MESSAGE_LIST,
    token,
    data

  };
};

//For add review
export const addReviewAPI = (token, data) => {

  return {

    type: API_CONST.N_ADD_REVIEW,
    token,
    data

  };
};

//For filter property
export const filterProperty = (token, data) => {

  return {

    type: API_CONST.N_FILTER_PROPERTY,
    token,
    data

  };
};

//For update image list
export const shareImageForChat = (token, data, postData) => {
  console.log('token = ', token);

  return {
    type: API_CONST.N_SHARE_IMAGE_FOR_CHAT,
    token,
    data,
    postData
  };
};


//For get user all review list
export const getAllUserReviewsList = (token, id) => {
  
  return {

    type: API_CONST.N_GET_ALL_USER_REVIEW,
    token,
    id

  };
};

export const editProperty = (token, data) => {
  //console.log('edit property = ', JSON.stringify(data));
  return {
    type: API_CONST.N_ADD_EDIT_PROPERTY,
    token,
    data
  };
};

export const getUserRoleReviewsList = (token, data) => {
  //console.log('edit property = ', JSON.stringify(data));
  return {
    type: API_CONST.N_GET_USER_ROLE_REVIEW,
    token,
    data
  };
};

//For maintenance request list
export const getMaintenanceRequestList = (token, data) => {
  console.log('getMaintenanceRequestList = ', JSON.stringify(data));
  return {
    type: API_CONST.N_GET_MAINTENANCE_REQUEST_LIST,
    token,
    data
  };
};

//For maintenance thread list
export const getMaintenanceThreadList = (token, data) => {
  console.log('getMaintenanceThreadList = ', JSON.stringify(data));
  return {
    type: API_CONST.N_GET_MAINTENANCE_THREAD_LIST,
    token,
    data
  };
};

//For general thread list
export const getGeneralThreadList = (token, data) => {
  console.log('getGeneralThreadList = ', JSON.stringify(data));
  return {
    type: API_CONST.N_GET_GENERAL_THREAD_LIST,
    token,
    data
  };
};

//For get all property list
export const getAllPropertyList = (token, data,APIS) => {
  console.log('property list= ', token);
  return {
    type: API_CONST.N_GET_ALL_PROPERTY,
    token,
    data,
    APIS
  };
};

//For upload banner image 
export const updateBannerImage = (token, data, _id) => {
 // console.log('token = ', token);
  return {
    type: API_CONST.N_UPLOAD_BANNER_IMG,
    token,
    data,
    _id
  };
};

//update agreement
export const updateAgreement = (token, data) => {

  return {
    type: API_CONST.N_UPDATE_AGREEMENT,
    token,
    data
  };
};

//get cancel maintenance req
export const cancelMaintenanceReq = (token, id) => {

  return {

    type: API_CONST.N_CANCEL_MAINTENANCE_REQ,
    token,
    id

  };
};

//For get user all review list
export const getAllAgentList = (token) => {

  return {

    type: API_CONST.N_ALL_AGENT_LIST,
    token

  };
};

//update agreement
export const getAllAgentListWithiInAgency = (token, data) => {

  return {
    type: API_CONST.N_ALL_AGENT_LIST_WITHI_IN_AGENCY,
    token,
    data
  };
};

//add user as fav
export const addUserToFav = (token, data) => {

  return {
    type: API_CONST.N_ADD_USER_AS_FAV,
    token,
    data
  };
};

//get agreement for tenant profile
export const getAgreementForTenantProfile = (token, id) => {

  return {
    type: API_CONST.N_GET_AGREEMENT_FOR_TENANT_PROFILE,
    token,
    id
  };
};
//get traders job history
export const getTraderJobHistory = (token, data) => {

  return {
    type: API_CONST.N_TRADERS_JOB_HISTORY,
    token,
    data
  };
};

//get fav traders list
export const getFavTradersList = (token, data) => {

  return {
    type: API_CONST.N_GET_FAV_TRADERS,
    token,
    data
  };
};


//globar serach
export const globalSearch = (token, data) => {

  return {
    type: API_CONST.N_GLOBAL_SEARCH,
    token,
    data
  };
};

//globar serach
export const addAgentByAgency = (token, data) => {

  return {
    type: API_CONST.N_ADD_AGENT_BY_AGENCY,
    token,
    data
  };
};

//For filter my file
export const filterMyFile = (token, data) => {

  return {

    type: API_CONST.N_FILTER_MY_FILE,
    token,
    data

  };
};


export const getAgencyProperty = (token, data) => {

  return {

    type: API_CONST.N_GET_AGENCY_PROPERTY,
    token,
    data

  };
};

//For get all agency list
export const getAllAgencyList = (token) => {
  return {
    type: API_CONST.N_ALL_AGENCY_LIST,
    token
  };
};

//For agency association request
export const getAssociateWithAgency = (token, data) => {
  return {
    type: API_CONST.N_ASSOCIATE_WITH_AGENCY,
    token,
    data
  };
};






