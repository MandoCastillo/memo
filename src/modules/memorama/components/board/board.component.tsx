import { Button, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import ReactConfetti from 'react-confetti';

import { Card } from '../card';

import { useBoard } from './use-boards';

export const Board = () => {
  const { attempts, areAllCardsSelected, cards, handleCardClick, handleResetGame } = useBoard(9);

  return (
    <>
      {areAllCardsSelected && (
        <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <Stack gap={4}>
        <Text textAlign="center" fontSize="3xl">
          Attempts: {attempts}
        </Text>
        <SimpleGrid columns={24} gap={[1, 3]}>
          {cards.map(card => (
            <Card key={card.id} card={card} handleCardClick={handleCardClick} />
          ))}
        </SimpleGrid>
        <Button onClick={handleResetGame} colorScheme={areAllCardsSelected ? 'teal' : 'gray'}>
          {areAllCardsSelected ? 'You win! Reset' : 'Reset game'}
        </Button>
      </Stack>
    </>
  );
};
