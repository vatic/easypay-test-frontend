export const SAVE_TOKEN = 'SAVE_TOKEN';

const saveToken = (token) => {
  return {
    type: SAVE_TOKEN,
    run: () => {
      localStorage.token = token;
    },
  };
};
export default saveToken;
