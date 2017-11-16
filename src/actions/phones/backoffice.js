import config from '../../config';
import getToken from '../auth/getToken';

export const PHONES_REQUEST = 'PHONES_REQUEST';
export const PHONES_SUCCESS = 'PHONES_SUCCESS';
export const PHONES_FAILURE = 'PHONES_FAILURE';

export const getPhones = () => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.PHONES,
    method: 'GET',
    types: [PHONES_REQUEST, PHONES_SUCCESS, PHONES_FAILURE],
    headers: { Authorization: `Bearer ${getToken().run()}` },
  },
});
