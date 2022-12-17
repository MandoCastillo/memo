/* eslint-disable no-bitwise */

// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
const generateUUID = () => {
  // Public Domain/MIT
  let d = new Date().getTime();
  let d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function t(c) {
    let r = Math.random() * 16; // random number between 0 and 16
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

const uuidHelper = {
  generateUUID
};

export default uuidHelper;
