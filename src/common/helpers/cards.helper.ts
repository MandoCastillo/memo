import { type ICard } from '@/interfaces';

import arrayHelper from './array.helper';
import uuidHelper from './uuid.helper';

const getGetRandomCards = (numberCards: number): ICard[] => {
  const cards = Array.from(Array(numberCards).keys())
    .concat(Array.from(Array(numberCards).keys()))
    .map(num => ({
      id: uuidHelper.generateUUID(),
      image: `/cards/${(num + 1).toString().padStart(3, '0')}.webp`,
      isSelected: false
    }));

  return arrayHelper.shuffle(cards);
};

const cardsHelper = {
  getGetRandomCards
};

export default cardsHelper;
