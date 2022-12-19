import { Button, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import ReactConfetti from 'react-confetti';

import { Card } from '../card';

import { useBoard } from './use-boards';

export const Board = () => {
  const {
    attempts,
    areAllCardsSelected,
    cards,
    handleCardClick,
    handleResetGame,
    areDifferent,
    cardsRevealed
  } = useBoard(9);

  return (
    <>
      {areAllCardsSelected && (
        <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <Stack
        gap={4}
        background="url(/board-bg-2.jpg) no-repeat center center fixed"
        backgroundSize="cover"
        h="100vh"
      >
        <Text
          textAlign="center"
          fontSize="3xl"
          color="white"
          fontWeight="bold"
          textShadow="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;"
        >
          Attempts: {attempts}
        </Text>
        {areAllCardsSelected && (
          <Button onClick={handleResetGame} colorScheme="teal">
            You win! Reset game
          </Button>
        )}
        <SimpleGrid columns={24} gap={[1, 3]}>
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              handleCardClick={handleCardClick}
              areDifferentCardsSelected={areDifferent}
              cardsRevealed={cardsRevealed}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};
