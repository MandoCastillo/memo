import { AspectRatio, Image } from '@chakra-ui/react';

import { ICard } from '@/interfaces';

interface CardProps {
  card: ICard;
}

export const Card = ({ card }: CardProps) => {
  return (
    <AspectRatio
      maxW="200px"
      ratio={3 / 4}
      _hover={{
        cursor: 'pointer'
      }}
    >
      <Image src={card.image} alt="card" objectFit="cover" />
    </AspectRatio>
  );
};
