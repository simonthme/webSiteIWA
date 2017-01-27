/**
 * Created by simonthome on 23/01/2017.
 */
'use strict';

const config = {
  apiUrl: 'http://127.0.0.1:3000/api',
  head: {
    headers: {
      'Authorization': localStorage.token
    }
  }
};

export default config;