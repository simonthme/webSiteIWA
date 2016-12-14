/**
 * Created by simonthome on 14/12/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import Root from './routes';

import {browserHistory} from 'react-router';



render(<Root history={browserHistory}/>, document.querySelector('#app'));