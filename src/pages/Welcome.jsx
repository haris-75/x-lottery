import Container from '../components/Container';
import Button from '../components/Button';
import Add from '../assets/add.svg';
// import Subtract from '../assets/subtract.svg';

const ItemCard = ({ text }) => (
  <div className='w-full flex sm:py-4 sm:px-2 py-2 px-1 rounded-full bg-white-secondary justify-between max-w-[500px]'>
    <p className='font-semibold lg:text-base md:text-sm text-xs ml-2'>{text}</p>
    <div className='cursor-pointer'>
      <img
        className='w-[20px]'
        src={Add}
        alt='add-icon'
      />
    </div>
  </div>
);

export default function WelcomePage() {
  return (
    <Container>
      <div className='flex md:flex-row flex-col justify-between items-center pt-[50px] pb-[50px] md:gap-0 gap-6'>
        <div className='flex flex-col gap-8'>
          <h1 className='font-semibold lg:text-4xl md:text-2xl text-xl'>
            Welcome to xLottery
          </h1>
          <div className='flex flex-col gap-4 xl:max-w-[600px] lg:max-w-[500px] md:max-w-[350px] md-lg:max-w-[400px]'>
            <p className='font-light lg:text-base text-sm'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
