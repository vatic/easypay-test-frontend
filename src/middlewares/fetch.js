import 'whatwg-fetch';
// import logger from 'winston';

const fetchMiddleware = store => next => (action) => {
  if (!action || !action.API_CALL) return next(action);

  const {
    types,
    endpoint,
    method,
    headers,
    mode,
    headersOverride,
    binary,
    data,
    noCredentials,
    nextAction,
  } = action.API_CALL;

  const { extraParams } = action;

  store.dispatch({
    type: types[0],
  });

  const config = {
    method,
    headers: headersOverride ? headers : Object.assign({}, headers, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    mode: mode || 'cors',
    cache: 'default',
    credentials: noCredentials ? '' : 'include',
    body: data,
  };

  return fetch(endpoint, config)
    .then((response) => {
      console.dir(config);
      if (!response.ok) { // (response.status < 200 || response.status > 300)
        store.dispatch({
          type: types[2],
          payload: { error: response },
          extraParams,
        });
        return Promise.reject(response);
      }
      return Promise.resolve(response);
    })
    .then((response) => {
      const blobOrJson = binary ? response.blob() : response.json();
      return blobOrJson;
    })
    .then((json) => {
      store.dispatch({
        type: types[1],
        payload: json,
        extraParams,
      });
    })
    .then(() => {
      if (nextAction) store.dispatch(nextAction());
    });
};

export default fetchMiddleware;
