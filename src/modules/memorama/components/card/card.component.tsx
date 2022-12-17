import { AspectRatio, GridItem, Image } from '@chakra-ui/react';

import { ICard } from '@/interfaces';

interface CardProps {
  card: ICard;
  handleCardClick: (card: ICard) => void;
}

export const Card = ({ card, handleCardClick }: CardProps) => {
  const image = card.isSelected ? card.image : '/cards/cover.png';

  return (
    <GridItem colSpan={[6, 3]}>
      <AspectRatio
        ratio={3 / 4}
        _hover={{
          cursor: 'pointer'
        }}
        onClick={() => handleCardClick(card)}
        role="button"
      >
        <Image src={image} alt="card" objectFit="cover" maxWidth="100%" />
      </AspectRatio>
    </GridItem>
  );
};
