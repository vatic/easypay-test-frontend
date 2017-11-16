const API_ROOT_NODE = `http://${window.location.hostname}:8080`;

const config = {
   API_ROOT_NODE: API_ROOT_NODE,

   ENDPOINTS: {
    CHECK_PHONE: phone => `${API_ROOT_NODE}/phones/check/${phone}`,
   }
};

export default config;
