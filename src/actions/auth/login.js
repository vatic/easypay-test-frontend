import config from '../../config';

// POST /login
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username, password) => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.LOGIN,
    method: 'POST',
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    data: `username=${username}&password=${password}&grant_type=password&client_id=react&client_secret=null`,
    headersOverride: true,
    headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
  },
});
