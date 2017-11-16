import 'whatwg-fetch';

const fetchMiddleware = store => next => action => {
  if (!action || !action.API_CALL) {
    return next(action)
  }

  let { types, endpoint, method, headers, mode, headersOverride, binary, data, noCredentials } = action.API_CALL;
  let extraParams = action.extraParams;

  store.dispatch({
    type: types[0]
  });

  const config =  { method: method,
                    headers: headersOverride ? headers : Object.assign({}, headers, {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    }),
                    mode: mode ? mode: 'cors',
                    cache: 'default',
                    credentials: noCredentials ? '' : 'include',
                    body: data,
                  };

  fetch(endpoint, config)
    .then( response => {
      if (!response.ok) {   // (response.status < 200 || response.status > 300)
        console.log("not ok response: ", response);
        return Promise.reject(new Error(response.statusText))
      }
      return Promise.resolve(response)
    })
    .then( response => binary ? response.blob(): response.json() )
    .then((json) => {
      store.dispatch({
        type: types[1],
        payload: json,
        extraParams: extraParams
      });
    })
    .catch((error) => {
      console.log("error response: ", error);
      const response = error.response;
      if (response === undefined) {
        throw error;
      } else {
        error.status = response.status;
        error.statusText = response.statusText;
        response.text().then( (text) => {
          try {
            const json = JSON.parse(text);
            error.message = json.message;
          } catch (ex) {
            error.message = text;
          }
          store.dispatch({
            type: types[2],
            error
          });
        });
    }
    });

}

module.exports = fetchMiddleware;
