import Wrapper from '../layout/wrapper';
import CharacterCard from '../layout/CharacterCard';
import TUMshop from '../../public/images/TUMshop.jpeg';
import Relocation from '../../public/images/Relocation.jpeg';
import StayConnected from '../../public/images/stay-connected.jpeg';

const Character = () => {
  return (
    <div className='my-32'>
      <Wrapper>
        <div className='grid md:grid-cols-3 gap-10'>
          <div className=''>
            <CharacterCard
              image={StayConnected}
              title='Stay connected'
              content='Benefit from our worldwide network, make contacts and stay connected with your Alma Mater!'
              button='Join the TUM Community'
              variant='secondary'
              size='lg'
            />
          </div>
          <div>
            <CharacterCard
              image={Relocation}
              title='TUMint Relocation Service'
              content='All-inclusive onboarding package for international students assists with accommodation and much more.'
              button='See our services'
              variant='secondary'
              size='xl'
            />
          </div>
          <div>
            <CharacterCard
              image={TUMshop}
              title='Discover the TUMshop'
              content='Merchandising items, conference materials and other products in the corporate design can be found online and on site.'
              button='Shop Online'
              variant='secondary'
              size='xl'
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Character;