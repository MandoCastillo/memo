import { useState } from 'react';

import { Button, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import { arrayHelper, uuidHelper } from '@/helpers';
import { ICard } from '@/interfaces';

import { Card } from '../card';

const cardsInitial: ICard[] = Array.from(Array(9).keys())
  .concat(Array.from(Array(9).keys()))
  .map(num => ({
    id: uuidHelper.generateUUID(),
    image: `/cards/00${num + 1}.png`,
    isSelected: false
  }));

export const Board = () => {
  const [cards, setCards] = useState<ICard[]>(arrayHelper.shuffle(cardsInitial));
  const [selectedCards, setSelectedCards] = useState<ICard[]>([]);
  const [areDifferent, setAreDifferent] = useState(false);
  const [attempts, setAttempts] = useState<number>(0);

  const areAllCardsSelected = cards.every(card => card.isSelected);

  const handleResetGame = () => {
    setCards(arrayHelper.shuffle(cardsInitial));
    setSelectedCards([]);
    setAreDifferent(false);
    setAttempts(0);
  };

  const handleCardClick = (cardSelected: ICard) => {
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

    // add new attempt
    setAttempts(attempts + 1);

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
    <Stack gap={4} p={2}>
      <Text textAlign="center">Attempts: {attempts}</Text>
      <SimpleGrid columns={24} gap={4}>
        {cards.map(card => (
          <Card key={card.id} card={card} handleCardClick={handleCardClick} />
        ))}
      </SimpleGrid>
      <Button onClick={handleResetGame}>
        {areAllCardsSelected ? 'You win! Resert' : 'Reset game'}
      </Button>
    </Stack>
  );
};
