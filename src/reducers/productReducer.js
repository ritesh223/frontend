import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT1_REQUEST,
    ADMIN_PRODUCT1_SUCCESS,
    ADMIN_PRODUCT1_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,
    ALL_REVIEW1_REQUEST,
    ALL_REVIEW1_SUCCESS,
    ALL_REVIEW1_FAIL,
    DELETE_REVIEW1_REQUEST,
    DELETE_REVIEW1_SUCCESS,
    DELETE_REVIEW1_FAIL,
    DELETE_REVIEW1_RESET,
    CLEAR_ERRORS,
} from "../constants/productConstants";

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
        // case ADMIN_PRODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount,
            };

        // case ADMIN_PRODUCT_SUCCESS:
        //     return {
        //         loading: false,
        //         products: action.payload,
        //     };
        case ALL_PRODUCT_FAIL:
        // case ADMIN_PRODUCT_FAIL:
            return {
                loading: false,
                error: "No Hotel Available",
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
export const vendorproductsReducer = (state = { vproducts: [] }, action) => {
    switch (action.type) {
        // case ALL_PRODUCT_REQUEST:
        case ADMIN_PRODUCT_REQUEST:
            return {
                loading: true,
                vproducts: [],
            };
        // case ALL_PRODUCT_SUCCESS:
        //     return {
        //         loading: false,
        //         vproducts: action.payload.products,
        //         // productsCount: action.payload.productsCount,
        //         // resultPerPage: action.payload.resultPerPage,
        //         // filteredProductsCount: action.payload.filteredProductsCount,
        //     };

        case ADMIN_PRODUCT_SUCCESS:
            return {
                loading: false,
                vproducts: action.payload.vproducts,
                totalProducts: action.payload.totalProducts,
            };
        // case ALL_PRODUCT_FAIL:
        case ADMIN_PRODUCT_FAIL:
            return {
                loading: false,
                error: "No Hotels Available",
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
export const vendorproducts1Reducer = (state = { vproducts1: [] }, action) => {
    switch (action.type) {
        // case ALL_PRODUCT_REQUEST:
        case ADMIN_PRODUCT1_REQUEST:
            return {
                loading: true,
                vproducts1: [],
            };
        // case ALL_PRODUCT_SUCCESS:
        //     return {
        //         loading: false,
        //         vproducts: action.payload.products,
        //         // productsCount: action.payload.productsCount,
        //         // resultPerPage: action.payload.resultPerPage,
        //         // filteredProductsCount: action.payload.filteredProductsCount,
        //     };

        case ADMIN_PRODUCT1_SUCCESS:
            return {
                loading: false,
                vproducts1: action.payload.vproducts1,
                totalProducts1: action.payload.totalProducts1,
            };
        // case ALL_PRODUCT_FAIL:
        case ADMIN_PRODUCT1_FAIL:
            return {
                loading: false,
                error: "No Holiday Packages Available",
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

export const newProductReducer = (state = { product: {} , loading: false }, action) => {
    switch (action.type) {
        case NEW_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product,
            };
        case NEW_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: "Some Error Occured! please try Again",
            };
        case NEW_PRODUCT_RESET:
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

export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };

        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_PRODUCT_RESET:
            return {
                ...state,
                isDeleted: false,
            };
        case UPDATE_PRODUCT_RESET:
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

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case PRODUCT_DETAILS_FAIL:
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

export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload,
            };
        case NEW_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: "Review not submitted successfully",
            };
        case NEW_REVIEW_RESET:
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

export const productReviewsReducer = (state = { reviews: [] }, action) => {
    switch (action.type) {
        case ALL_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_REVIEW_SUCCESS:
            return {
                loading: false,
                reviews: action.payload,
            };
        case ALL_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error:"No Hotel Found With This Id",
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
export const productReviewsReducer1 = (state = { reviews1: [] }, action) => {
    switch (action.type) {
        case ALL_REVIEW1_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_REVIEW1_SUCCESS:
            return {
                loading: false,
                reviews: action.payload,
            };
        case ALL_REVIEW1_FAIL:
            return {
                ...state,
                loading: false,
                error: "No Holiday Package Found With This Id",
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

export const reviewReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_REVIEW_RESET:
            return {
                ...state,
                isDeleted: false,
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
export const reviewReducer1 = (state = {}, action) => {
    switch (action.type) {
        case DELETE_REVIEW1_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_REVIEW1_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case DELETE_REVIEW1_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_REVIEW1_RESET:
            return {
                ...state,
                isDeleted: false,
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