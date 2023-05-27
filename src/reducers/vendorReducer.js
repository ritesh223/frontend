import {
  VENDOR_LOGIN_REQUEST,
  VENDOR_LOGIN_SUCCESS,
  VENDOR_LOGIN_FAIL,
  VENDOR1_LOGIN_REQUEST,
  VENDOR1_LOGIN_SUCCESS,
  VENDOR1_LOGIN_FAIL,
  REGISTER_VENDOR_REQUEST,
  REGISTER_VENDOR_SUCCESS,
  REGISTER_VENDOR_FAIL,
  REGISTER_VENDOR1_REQUEST,
  REGISTER_VENDOR1_SUCCESS,
  REGISTER_VENDOR1_FAIL,
  LOGOUT_VENDOR_SUCCESS,
  LOGOUT_VENDOR_FAIL,
  LOGOUT_VENDOR1_SUCCESS,
  LOGOUT_VENDOR1_FAIL,
  UPDATE_VENDOR_PROFILE_REQUEST,
  UPDATE_VENDOR_PROFILE_SUCCESS,
  UPDATE_VENDOR_PROFILE_RESET,
  UPDATE_VENDOR_PROFILE_FAIL,
  UPDATE_VENDOR1_PROFILE_REQUEST,
  UPDATE_VENDOR1_PROFILE_SUCCESS,
  UPDATE_VENDOR1_PROFILE_RESET,
  UPDATE_VENDOR1_PROFILE_FAIL,
  UPDATE_VENDOR_PASSWORD_REQUEST,
  UPDATE_VENDOR_PASSWORD_SUCCESS,
  UPDATE_VENDOR_PASSWORD_RESET,
  UPDATE_VENDOR_PASSWORD_FAIL,
  UPDATE_VENDOR1_PASSWORD_REQUEST,
  UPDATE_VENDOR1_PASSWORD_SUCCESS,
  UPDATE_VENDOR1_PASSWORD_RESET,
  UPDATE_VENDOR1_PASSWORD_FAIL,
  FORGOT_VENDOR_PASSWORD_REQUEST,
  FORGOT_VENDOR_PASSWORD_SUCCESS,
  FORGOT_VENDOR_PASSWORD_FAIL,
  FORGOT_VENDOR1_PASSWORD_REQUEST,
  FORGOT_VENDOR1_PASSWORD_SUCCESS,
  FORGOT_VENDOR1_PASSWORD_FAIL,
  RESET_VENDOR_PASSWORD_REQUEST,
  RESET_VENDOR_PASSWORD_SUCCESS,
  RESET_VENDOR_PASSWORD_FAIL,
  RESET_VENDOR1_PASSWORD_REQUEST,
  RESET_VENDOR1_PASSWORD_SUCCESS,
  RESET_VENDOR1_PASSWORD_FAIL,
  CLEAR_ERRORS,

} from "../constants/vendorConstants";


export const vendorReducer = (state = { vendor: {} , loading : false }, action) => {
  switch (action.type) {
    case  VENDOR_LOGIN_REQUEST :
    case REGISTER_VENDOR_REQUEST:
    
      return {
        loading: true,
        isAuthenticatedVendor: false,
      };
    case VENDOR_LOGIN_SUCCESS:
    case REGISTER_VENDOR_SUCCESS:
    
      // localStorage.setItem("Reduxuser", JSON.stringify(action.payload));

      return {
        ...state,
        loading: false,
        isAuthenticatedVendor: true,
        // token1: action.payload.token1,
        vendor: action.payload.vendor,
      };

    case LOGOUT_VENDOR_SUCCESS:
      return {
        loading: false,
        vendor: null,
        isAuthenticatedVendor: false,
      };
    case VENDOR_LOGIN_FAIL:
    case REGISTER_VENDOR_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticatedVendor: false,
        vendor: null,
        error: action.payload,
      };
    case LOGOUT_VENDOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const vendorReducer1 = (state = { guide: {} , loading: false }, action) => {
  switch (action.type) {
    case VENDOR1_LOGIN_REQUEST:
    case REGISTER_VENDOR1_REQUEST:
      return {
        loading: true,
        isAuthenticatedGuide: false,
      };
    case VENDOR1_LOGIN_SUCCESS:
    case REGISTER_VENDOR1_SUCCESS:
      // localStorage.setItem("Reduxuser", JSON.stringify(action.payload));

      return {
        ...state,
        loading: false,
        isAuthenticatedGuide: true,
        // token2: action.payload.token2,
        guide: action.payload.guide,
      };

    case LOGOUT_VENDOR1_SUCCESS:
      return {
        loading: false,
        guide: null,
        isAuthenticatedGuide: false,
      };
    case VENDOR1_LOGIN_FAIL:
    case REGISTER_VENDOR1_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticatedGuide: false,
        guide: null,
        error: action.payload,
      };
    case LOGOUT_VENDOR1_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};




export const profileReducerv = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_VENDOR_PROFILE_REQUEST:
    case UPDATE_VENDOR_PASSWORD_REQUEST:
      //     case UPDATE_USER_REQUEST:
      //     case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_VENDOR_PROFILE_SUCCESS:
    case UPDATE_VENDOR_PASSWORD_SUCCESS:
      //     case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    //     case DELETE_USER_SUCCESS:
    //       return {
    //         ...state,
    //         loading: false,
    //         isDeleted: action.payload.success,
    //         message: action.payload.message,
    //       };

    case UPDATE_VENDOR_PROFILE_FAIL:
    case UPDATE_VENDOR_PASSWORD_FAIL:
      //     case UPDATE_USER_FAIL:
      //     case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_VENDOR_PROFILE_RESET:
    case UPDATE_VENDOR_PASSWORD_RESET:
      //     case UPDATE_USER_RESET:
      return {
        ...state,
        // ...initialState,
        isUpdated: false,
      };

    //     case DELETE_USER_RESET:
    //       return {
    //         ...state,
    //         isDeleted: false,
    //       };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
export const profileReducerv1 = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_VENDOR1_PROFILE_REQUEST:
    case UPDATE_VENDOR1_PASSWORD_REQUEST:
      //     case UPDATE_USER_REQUEST:
      //     case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_VENDOR1_PROFILE_SUCCESS:
    case UPDATE_VENDOR1_PASSWORD_SUCCESS:
      //     case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    //     case DELETE_USER_SUCCESS:
    //       return {
    //         ...state,
    //         loading: false,
    //         isDeleted: action.payload.success,
    //         message: action.payload.message,
    //       };

    case UPDATE_VENDOR1_PROFILE_FAIL:
    case UPDATE_VENDOR1_PASSWORD_FAIL:
      //     case UPDATE_USER_FAIL:
      //     case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_VENDOR1_PROFILE_RESET:
    case UPDATE_VENDOR1_PASSWORD_RESET:
      //     case UPDATE_USER_RESET:
      return {
        ...state,
        // ...initialState,
        isUpdated: false,
      };

    //     case DELETE_USER_RESET:
    //       return {
    //         ...state,
    //         isDeleted: false,
    //       };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
export const forgotPasswordReducerv = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_VENDOR_PASSWORD_REQUEST:
    case RESET_VENDOR_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FORGOT_VENDOR_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case RESET_VENDOR_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };

    case FORGOT_VENDOR_PASSWORD_FAIL:
    case RESET_VENDOR_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
export const forgotPasswordReducerv1 = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_VENDOR1_PASSWORD_REQUEST:
    case RESET_VENDOR1_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FORGOT_VENDOR1_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case RESET_VENDOR1_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };

    case FORGOT_VENDOR1_PASSWORD_FAIL:
    case RESET_VENDOR1_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};