import { AspectRatio, GridItem, Image } from '@chakra-ui/react';
import ReactCardFlip from 'react-card-flip';

import { ICard } from '@/interfaces';

interface CardProps {
  card: ICard;
  handleCardClick: (card: ICard) => void;
}

export const Card = ({ card, handleCardClick }: CardProps) => {
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
        <ReactCardFlip isFlipped={card.isSelected} flipDirection="horizontal">
          <Image src="/cards/cover.webp" alt="card" objectFit="cover" maxWidth="100%" />
          <Image src={card.image} alt="card" objectFit="cover" maxWidth="100%" />
        </ReactCardFlip>
      </AspectRatio>
    </GridItem>
  );
};
