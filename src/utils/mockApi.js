export const userLogin = async ({ password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
};
