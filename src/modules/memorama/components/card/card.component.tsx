import { AspectRatio, Image } from '@chakra-ui/react';

import { ICard } from '@/interfaces';

interface CardProps {
  card: ICard;
  handleCardClick: (card: ICard) => void;
}

export const Card = ({ card, handleCardClick }: CardProps) => {
  const image = card.isSelected ? card.image : '/cards/cover.png';

  return (
    <AspectRatio
      maxW="200px"
      ratio={3 / 4}
      _hover={{
        cursor: 'pointer'
      }}
      onClick={() => handleCardClick(card)}
      role="button"
    >
      <Image src={image} alt="card" objectFit="cover" />
    </AspectRatio>
  );
};
