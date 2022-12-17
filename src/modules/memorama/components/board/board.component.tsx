import { SimpleGrid } from '@chakra-ui/react';

import { ICard } from '@/interfaces';

import { Card } from '../card';

export const Board = () => {
  const cards: ICard[] = Array.from(Array(9).keys())
    .concat(Array.from(Array(9).keys()))
    .map(num => ({
      id: Math.random() * 16,
      image: `/cards/00${num + 1}.png`
    }));

  return (
    <SimpleGrid columns={8} gap={4}>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </SimpleGrid>
  );
};
