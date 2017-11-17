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
        // logger.error(`not ok response: ${response.status}`);
        // return Promise.reject(new Error(response.statusText));
        console.log(response);
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
    });
    // .catch((error) => {
    //   // logger.error('error response: ', error);
    //   const { response } = error;
    //   const err = error;
    //   if (response === undefined) {
    //     throw error;
    //   } else {
    //     err.status = response.status;
    //     err.statusText = response.statusText;
    //     response.text().then((text) => {
    //       try {
    //         const json = JSON.parse(text);
    //         err.message = json.message;
    //       } catch (ex) {
    //         err.message = text;
    //       }
    //       store.dispatch({
    //         type: types[2],
    //         error,
    //       });
    //     });
    //   }
    // });
};

export default fetchMiddleware;
