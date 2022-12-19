import { AspectRatio, GridItem, Image } from '@chakra-ui/react';
import ReactCardFlip from 'react-card-flip';

import { ICard } from '@/interfaces';

import '@/styles/shake.css';

interface CardProps {
  card: ICard;
  handleCardClick: (card: ICard) => void;
  areDifferentCardsSelected: boolean;
  cardsRevealed: ICard[];
}

export const Card = ({
  card,
  handleCardClick,
  areDifferentCardsSelected,
  cardsRevealed
}: CardProps) => {
  const isCardRevealed = cardsRevealed.some(c => c.id === card.id);
  return (
    <GridItem colSpan={[6, 3]}>
      <AspectRatio
        ratio={3 / 4}
        _hover={{
          cursor: 'pointer'
        }}
        onClick={() => handleCardClick(card)}
        role="button"
        className={areDifferentCardsSelected && card.isSelected && !isCardRevealed ? 'shake' : ''}
      >
        <ReactCardFlip isFlipped={card.isSelected} flipDirection="horizontal">
          <Image src="/cards/cover.webp" alt="card" objectFit="cover" maxWidth="100%" />
          <Image src={card.image} alt="card" objectFit="cover" maxWidth="100%" />
        </ReactCardFlip>
      </AspectRatio>
    </GridItem>
  );
};
