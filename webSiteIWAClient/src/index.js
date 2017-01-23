/**
 * Created by simonthome on 14/12/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import Root from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import * as authActions from './actions/authAction';

import {browserHistory} from 'react-router';

const store = configureStore();
store.dispatch(authActions.isAuth());


render(<Provider store={store}><Root history={browserHistory}/></Provider>, document.querySelector('#app'));