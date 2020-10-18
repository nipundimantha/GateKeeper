import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
} from './reducers/userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
  orderDeleteReducer,
} from './reducers/orderReducers';
import {
  supplierListReducer,
  supplierDetailsReducer,
  supplierSaveReducer,
  supplierDeleteReducer,
  supplierReviewSaveReducer,
} from './reducers/supplierReducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  userSignin: { userInfo },
};
const reducer = combineReducers({
  // productList: productListReducer,
  // productDetails: productDetailsReducer,
  // cart: cartReducer,
  // userSignin: userSigninReducer,
  // userRegister: userRegisterReducer,
  // productSave: productSaveReducer,
  // productDelete: productDeleteReducer,
  // productReviewSave: productReviewSaveReducer,
  // orderCreate: orderCreateReducer,
  // orderDetails: orderDetailsReducer,
  // orderPay: orderPayReducer,
  // userUpdate: userUpdateReducer,
  // myOrderList: myOrderListReducer,
  // orderList: orderListReducer,
  // orderDelete: orderDeleteReducer,
  productList: productListReducer,
  supplierList: supplierListReducer,
  supplierDetails: supplierDetailsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  supplierSave: supplierSaveReducer,
  supplierDelete: supplierDeleteReducer,
  productDelete: productDeleteReducer,
  productReviewSave: productReviewSaveReducer,
  supplierReviewSave:supplierReviewSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userUpdate: userUpdateReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;


// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import Cookie from 'js-cookie';
// import {
//   productListReducer,
//   productDetailsReducer,
//   productSaveReducer,
//   productDeleteReducer,
//   productReviewSaveReducer,
// } from './reducers/productReducers';
// import {
//   supplierListReducer,
//   supplierDetailsReducer,
//   supplierSaveReducer,
//   supplierDeleteReducer,
//   supplierReviewSaveReducer,
// } from './reducers/supplierReducers';
// import { cartReducer } from './reducers/cartReducers';
// import {
//   userSigninReducer,
//   userRegisterReducer,
//   userUpdateReducer,
// } from './reducers/userReducers';
// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderPayReducer,
//   myOrderListReducer,
//   orderListReducer,
//   orderDeleteReducer,
// } from './reducers/orderReducers';

// const cartItems = Cookie.getJSON('cartItems') || [];
// const userInfo = Cookie.getJSON('userInfo') || null;

// const initialState = {
//   cart: { cartItems, shipping: {}, payment: {} },
//   userSignin: { userInfo },
// };
// const reducer = combineReducers({
//   productList: productListReducer,
//   supplierList: supplierListReducer,
//   supplierDetails: supplierDetailsReducer,
//   productDetails: productDetailsReducer,
//   cart: cartReducer,
//   userSignin: userSigninReducer,
//   userRegister: userRegisterReducer,
//   productSave: productSaveReducer,
//   supplierSave: supplierSaveReducer,
//   supplierDelete: supplierDeleteReducer,
//   productDelete: productDeleteReducer,
//   productReviewSave: productReviewSaveReducer,
//   supplierReviewSave:supplierReviewSaveReducer,
//   orderCreate: orderCreateReducer,
//   orderDetails: orderDetailsReducer,
//   orderPay: orderPayReducer,
//   userUpdate: userUpdateReducer,
//   myOrderList: myOrderListReducer,
//   orderList: orderListReducer,
//   orderDelete: orderDeleteReducer,
// });
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   initialState,
//   composeEnhancer(applyMiddleware(thunk))
// );
// export default store;
