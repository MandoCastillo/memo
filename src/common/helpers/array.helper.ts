const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length;
  let randomIndex = array.length;

  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    // eslint-disable-next-line no-param-reassign
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;

  // for (let i = array.length - 1; i > 0; i - 1) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   // eslint-disable-next-line no-param-reassign
  //   [array[i], array[j]] = [array[j], array[i]];
  // }
};

const arrayHelper = {
  shuffle
};

export default arrayHelper;
