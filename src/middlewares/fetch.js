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
    nextActions,
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
      console.log('extra', extraParams);
      store.dispatch({
        type: types[1],
        payload: json,
        extraParams,
      });
    })
    .then(() => {
      console.log('fetch', action);
      if (nextActions && nextActions.length > 0) {
        nextActions.map((a) => {
          if (a.name === 'getPhones') {
            const { currentOffset, total } = store.getState().phones.list;
            if (action.API_CALL.method === 'DELETE') {
              return store.dispatch(a(currentOffset));
            } else if (action.API_CALL.method === 'POST') {
              // const numOfPages = total % 10 === 0 ? Math.floor(total / 10) : Math.floor(total / 10) + 1;
              const numOfPages = Math.floor(total / 10);
              return store.dispatch(a(numOfPages * 10));
            }
          }
          return store.dispatch(a());
        });
      }
    });
};

export default fetchMiddleware;
