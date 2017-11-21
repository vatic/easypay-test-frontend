import config from '../../config';

// GET /api/v1/players/:id/career
export const CHECK_PHONE_REQUEST = 'CHECK_PHONE_REQUEST';
export const CHECK_PHONE_SUCCESS = 'CHECK_PHONE_SUCCESS';
export const CHECK_PHONE_FAILURE = 'CHECK_PHONE_FAILURE';
export const CHECK_PHONE = 'CHECK_PHONE';

const checkPhone = phone => ({
  API_CALL: {
    endpoint: config.ENDPOINTS.CHECK_PHONE(phone),
    method: 'GET',
    types: [CHECK_PHONE_REQUEST, CHECK_PHONE_SUCCESS, CHECK_PHONE_FAILURE],
  },
  extraParams: { phone },
});

export default checkPhone;
