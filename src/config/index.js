const API_ROOT_NODE = `http://${window.location.hostname}:8080`;

const config = {
  API_ROOT_NODE,

  ENDPOINTS: {
    CHECK_PHONE: phone => `${API_ROOT_NODE}/phones/check/${phone}`,
    LOGIN: `${API_ROOT_NODE}/login`,
    PHONES: `${API_ROOT_NODE}/phones`,
    DEL_PHONE: phone => `${API_ROOT_NODE}/phones/${phone}`,
  },
};

export default config;
