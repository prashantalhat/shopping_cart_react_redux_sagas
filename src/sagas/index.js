import {
    takeLatest,
    takeEvery
} from 'redux-saga';
import {
    call,
    put,
    fork,
    select,
    take
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as actionTypes from '../constants';
import {
    api
} from '../services'
import {
    getCart
} from '../reducers'

export function* getAllProducts() {
    // sending request to fetch data from API
    const products = yield call(api.getProducts)

    // after success it would send an action
    yield put(actions.receiveProducts(products))
}

export function* checkout() {
    try {
        const cart = yield select(getCart)
        yield call(api.buyProducts, cart)
        yield put(actions.checkoutSuccess(cart))
    } catch (error) {
        console.log("checkout error");
        console.log(error);
        yield put(actions.checkoutFailure(error))
    }
}

export function* watchGetProducts() {
    /*
      takeEvery will fork a new `checkout` task on each GET_ALL_PRODUCTS actions
      i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
    yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts)
}

export function* watchCheckout() {
    while (true) {
        yield take(actions.CHECKOUT_REQUEST)

        /*
          ***THIS IS A BLOCKING CALL***
          It means that watchCheckout will ignore any CHECKOUT_REQUEST event until
          the current checkout completes, either by success or by Error.
          i.e. concurrent CHECKOUT_REQUEST are not allowed
          TODO: This needs to be enforced by the UI (disable checkout button)
        */
        yield call(checkout)
    }
}

export default function* root() {
    yield [
        fork(getAllProducts),
        fork(watchGetProducts),
        fork(watchCheckout)
    ];
}
