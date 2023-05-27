import { ALL_PRODUCT1_FAIL,
ALL_PRODUCT1_REQUEST,
ALL_PRODUCT1_SUCCESS,
PRODUCT1_DETAILS_FAIL,
PRODUCT1_DETAILS_REQUEST,
PRODUCT1_DETAILS_SUCCESS,
NEW_REVIEW1_FAIL,
NEW_REVIEW1_REQUEST,
NEW_REVIEW1_SUCCESS,
NEW_REVIEW1_RESET,
CLEAR_ERRORS ,
NEW_PRODUCT1_REQUEST,
NEW_PRODUCT1_SUCCESS,
NEW_PRODUCT1_FAIL,
NEW_PRODUCT1_RESET,
ALL_GUIDE_FAIL,
ALL_GUIDE_REQUEST,
ALL_GUIDE_SUCCESS,




} from "../constants/Product1Constants";
import {
  DELETE_PRODUCT1_FAIL,
  DELETE_PRODUCT1_REQUEST,
  DELETE_PRODUCT1_SUCCESS,
  DELETE_PRODUCT1_RESET,
  UPDATE_PRODUCT1_FAIL,
  UPDATE_PRODUCT1_REQUEST,
  UPDATE_PRODUCT1_SUCCESS,
  UPDATE_PRODUCT1_RESET,
} from "../constants/productConstants";

export const products1Reducer = (state = { products1: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT1_REQUEST:
        // case ADMIN_PRODUCT_REQUEST:
            return {
                loading: true,
                products1: [],
            };
        case ALL_PRODUCT1_SUCCESS:
            return {
                loading: false,
                products1: action.payload.products1,
                products1Count: action.payload.products1Count,
                resultPerPage: action.payload.resultPerPage,
                filteredProducts1Count: action.payload.filteredProducts1Count,
            };

        // case ADMIN_PRODUCT_SUCCESS:
        //     return {
        //         loading: false,
        //         products: action.payload,
        //     };
        case ALL_PRODUCT1_FAIL:
        // case ADMIN_PRODUCT_FAIL:
            return {
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
export const product1DetailsReducer = (state = { product1: {} }, action) => {
  switch (action.type) {
    case PRODUCT1_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT1_DETAILS_SUCCESS:
      return {
        loading: false,
        product1: action.payload,
      };
    case PRODUCT1_DETAILS_FAIL:
      return {
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
export const guidesReducer = (state = { guides: [] }, action) => {
    switch (action.type) {
        case ALL_GUIDE_REQUEST:
        // case ADMIN_PRODUCT_REQUEST:
            return {
                loading: true,
                guides: [],
            };
        case ALL_GUIDE_SUCCESS:
            return {
                loading: false,
                guides: action.payload.guides,
                guidesCount: action.payload.guidesCount,
                resultPerPage: action.payload.resultPerPage,
                filteredGuidesCount: action.payload.filteredGuidesCount,
            };

        // case ADMIN_PRODUCT_SUCCESS:
        //     return {
        //         loading: false,
        //         products: action.payload,
        //     };
        case ALL_GUIDE_FAIL:
        // case ADMIN_PRODUCT_FAIL:
            return {
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


export const newProductReducer1 = (state = { product1: {} , loading: false }, action) => {
  switch (action.type) {
    case NEW_PRODUCT1_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PRODUCT1_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product1: action.payload.product1,
      };
    case NEW_PRODUCT1_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PRODUCT1_RESET:
      return {
        ...state,
        success: false,
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
export const productReducer1 = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT1_REQUEST:
    case UPDATE_PRODUCT1_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT1_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_PRODUCT1_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_PRODUCT1_FAIL:
    case UPDATE_PRODUCT1_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PRODUCT1_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_PRODUCT1_RESET:
      return {
        ...state,
        isUpdated: false,
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



export const newReview1Reducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW1_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW1_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW1_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW1_RESET:
      return {
        ...state,
        success: false,
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
