import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { addToCart, updateCart, deleteFromCart } from './actions/cart-actions';
import App from './app'

//打印当前状态
console.log('initial state', store.getState())

//监听store的订阅
let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(addToCart('coffee', 1, 250))
store.dispatch(updateCart('coffee', 5, 10))
store.dispatch(addToCart('coffee1', 11, 2501))
store.dispatch(addToCart('coffee2', 12, 2502))
store.dispatch(deleteFromCart('coffee1'))
unsubscribe()


ReactDOM.render(
    <Provider store={store}>
        {App}
    </Provider>,
    document.getElementById('root')
)