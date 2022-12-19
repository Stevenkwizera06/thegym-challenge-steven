import Image from 'next/image';
import Wrapper from './wrapper';
import Button from './Button';

const CharacterCard = ({ image, title, content, button, size, variant }) => {
  return (
    <div>
      <Wrapper>
        <Image src={image} className='w-full h-72 object-cover' alt='' />
        <div className='mt-3'>
          <h2 className='font-bold text-xl my-5'>{title}</h2>
          <p className='text'>{content}</p>
        </div>
        <Button variant={variant} size={size}>
          {button}
        </Button>
      </Wrapper>
    </div>
  );
};

export default CharacterCard;