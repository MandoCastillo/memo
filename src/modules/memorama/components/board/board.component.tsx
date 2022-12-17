import { useState } from 'react';

import { SimpleGrid } from '@chakra-ui/react';

import { ICard } from '@/interfaces';

import { Card } from '../card';

const cardsInitial: ICard[] = Array.from(Array(9).keys())
  .concat(Array.from(Array(9).keys()))
  .map(num => ({
    id: Math.random() * 16,
    image: `/cards/00${num + 1}.png`,
    isSelected: false
  }));

// eslint-disable-next-line max-lines-per-function
export const Board = () => {
  const [cards, setCards] = useState<ICard[]>(cardsInitial);
  const [selectedCards, setSelectedCards] = useState<ICard[]>([]);
  const [areDifferent, setAreDifferent] = useState(false);

  const handleCardClick = (cardSelected: ICard) => {
    // if selectedCards has 2 cards, return
    if (areDifferent) {
      return;
    }

    // if selectedCards has 1 card, check if it's the same card
    if (selectedCards.length === 1 && selectedCards[0].id === cardSelected.id) {
      return;
    }

    // add card to selectedCards and change state
    if (selectedCards.length === 0) {
      setSelectedCards([cardSelected]);

      const cardIdx = cards.findIndex(card => card.id === cardSelected.id);
      const cardsCopy = [...cards];
      cardsCopy[cardIdx] = {
        ...cardsCopy[cardIdx],
        isSelected: true
      };

      setCards(cardsCopy);
      return;
    }

    // cards are equal
    if (selectedCards.length === 1 && selectedCards[0].image === cardSelected.image) {
      const cardIdx = cards.findIndex(card => card.id === cardSelected.id);
      const cardsCopy = [...cards];
      cardsCopy[cardIdx] = {
        ...cardsCopy[cardIdx],
        isSelected: true
      };

      setCards(cardsCopy);
      setSelectedCards([]);
    }

    // cards are different
    if (selectedCards.length === 1 && selectedCards[0].image !== cardSelected.image) {
      const cardIdx = cards.findIndex(card => card.id === cardSelected.id);
      const cardsCopy = [...cards];
      cardsCopy[cardIdx] = {
        ...cardsCopy[cardIdx],
        isSelected: true
      };

      setCards(cardsCopy);
      setSelectedCards([]);
      setAreDifferent(true);

      setTimeout(() => {
        const newCardsRevert = cards.map(card => {
          if (card.id === cardSelected.id || card.id === selectedCards[0].id) {
            return {
              ...card,
              isSelected: false
            };
          }
          return card;
        });
        setCards(newCardsRevert);
        setAreDifferent(false);
      }, 1000);
    }
  };

  return (
    <SimpleGrid columns={8} gap={4}>
      {cards.map(card => (
        <Card key={card.id} card={card} handleCardClick={handleCardClick} />
      ))}
    </SimpleGrid>
  );
};
