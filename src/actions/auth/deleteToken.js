export const DEL_TOKEN = 'DEL_TOKEN';

const deleteToken = () => {
  return {
    type: DEL_TOKEN,
    run: () => {
      localStorage.removeItem('token');
    },
  };
};
export default deleteToken;
