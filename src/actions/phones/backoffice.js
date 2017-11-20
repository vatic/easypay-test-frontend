import config from '../../config';
import getToken from '../auth/getToken';

export const PHONES_REQUEST = 'PHONES_REQUEST';
export const PHONES_SUCCESS = 'PHONES_SUCCESS';
export const PHONES_FAILURE = 'PHONES_FAILURE';

export const DEL_PHONE_REQUEST = 'DEL_PHONE_REQUEST';
export const DEL_PHONE_SUCCESS = 'DEL_PHONE_SUCCESS';
export const DEL_PHONE_FAILURE = 'DEL_PHONE_FAILURE';

export const ADD_PHONE_REQUEST = 'ADD_PHONE_REQUEST';
export const ADD_PHONE_SUCCESS = 'ADD_PHONE_SUCCESS';
export const ADD_PHONE_FAILURE = 'ADD_PHONE_FAILURE';

export const GET_TOTAL_REQUEST = 'GET_TOTAL_REQUEST';
export const GET_TOTAL_SUCCESS = 'GET_TOTAL_SUCCESS';
export const GET_TOTAL_FAILURE = 'GET_TOTAL_FAILURE';

export const getPhones = offset => ({
  API_CALL: {
    endpoint: `${config.ENDPOINTS.PHONES}?offset=${offset || 0}`,
    method: 'GET',
    types: [PHONES_REQUEST, PHONES_SUCCESS, PHONES_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
  extraParams: offset,
});

export const getTotal = () => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.PHONES_TOTAL,
    method: 'GET',
    types: [GET_TOTAL_REQUEST, GET_TOTAL_SUCCESS, GET_TOTAL_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
});

export const delPhone = phone => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.DEL_PHONE(phone),
    method: 'DELETE',
    types: [DEL_PHONE_REQUEST, DEL_PHONE_SUCCESS, DEL_PHONE_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
    nextActions: [getPhones, getTotal],
  },
});

export const addPhone = phone => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.PHONES,
    method: 'POST',
    types: [ADD_PHONE_REQUEST, ADD_PHONE_SUCCESS, ADD_PHONE_FAILURE],
    data: JSON.stringify({ phone }),
    headers: { Authorization: `Bearer ${getToken().run()}` },
    nextActions: [getPhones, getTotal],
  },
});
