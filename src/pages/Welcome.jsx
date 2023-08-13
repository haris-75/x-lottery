import Container from '../components/Container';
import Button from '../components/Button';
import Add from '../assets/add.svg';
import { useState } from 'react';
import Subtract from '../assets/subtract.svg';

const ItemCard = ({ text, cardOpen, setCardOpen }) => {
  return (
    <div
      className={`w-full flex flex-col sm:p-3 p-2  ${
        cardOpen === text
          ? 'bg-white shadow-card rounded-3xl'
          : 'bg-white-secondary rounded-full'
      } justify-between max-w-[500px] gap-2`}
    >
      <div className='flex justify-between'>
        <h1 className='font-semibold lg:text-base md:text-sm text-xs ml-2'>
          {text}
        </h1>

        <div
          className='cursor-pointer'
          onClick={() =>
            setCardOpen((prevState) => (prevState === text ? '' : text))
          }
        >
          <img
            className='w-[20px]'
            src={cardOpen === text ? Subtract : Add}
            alt='add-icon'
          />
        </div>
      </div>
      {cardOpen == text ? (
        <p className='font-light lg:text-sm md:text-xs text-[10px] ml-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      ) : (
        ''
      )}
    </div>
  );
};
const WelcomeContainer = () => {
  const [cardOpen, setCardOpen] = useState('');
  return (
    <div className='flex md:flex-row flex-col justify-between items-center pt-[50px] pb-[50px] md:gap-0 gap-6 '>
      <div className='flex flex-col gap-8 text-white'>
        <h1 className='font-semibold lg:text-4xl md:text-2xl text-xl'>
          Welcome to xLottery
        </h1>
        <div className='flex flex-col gap-4 xl:max-w-[600px] lg:max-w-[500px] md:max-w-[350px] md-lg:max-w-[400px]'>
          <p className='font-light lg:text-base text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className='font-light lg:text-base text-sm'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
        <div>
          <Button
            text='Start Now'
            backgroundColor='bg-primary'
            textColor='text-white'
            boxShadow
          />
        </div>
      </div>
      <div className='flex flex-col gap-4 md:w-[50%] sm:w-[80%] w-full  items-end'>
        {[
          'Lorem Ipsum is simply dummy text',
          'Lorem Ipsum has been the industry standard',
          'Electronic typesetting, remaining essentially',
          'Lorem Ipsum passages, and more recently',
          'Lorem Ipsum is not simply random text',
        ].map((ele) => (
          <ItemCard
            text={ele}
            key={ele}
            cardOpen={cardOpen}
            setCardOpen={setCardOpen}
          />
        ))}
      </div>
    </div>
  );
};

const WomenAdTextContainer = () => (
  <>
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[80%] max-w-[1000px] text-white py-4 m-auto'>
      <h1 className='font-bold xl:text-6xl lg:text-5xl md:text-4xl text-2xl lg:mb-7 md:mb-4 mb-2'>
        Donec in metus eleifend, viverra erat a, tempus metus.
      </h1>
      <p className='lg:text-base text-sm'>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets.It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.
      </p>
    </div>
  </>
);

export default function WelcomePage() {
  return (
    <section id='welcome'>
      <div className='parallax-women'>
        <Container className='relative xl:h-[800px] lg:h-[700px] md:h-[500px] sm:h-[350px] h-[250px]'>
          <WomenAdTextContainer />
        </Container>
      </div>

      <div className='parallax-women'>
        <Container>
          <WelcomeContainer />
        </Container>
      </div>
    </section>
  );
}
