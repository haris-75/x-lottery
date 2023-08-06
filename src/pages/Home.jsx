import HomePageImage from '../assets/hero-image.png';
import Container from '../components/Container';
import googlePlay from '../assets/googleplay.png';
import appStore from '../assets/googleplay.png';
import play from '../assets/play.png';
export default function HomePage() {
  return (
    <Container className='bg-white-secondary'>
      <div className='pt-[20px] pb-[50px] flex xl:gap-[40px] lg:gap-[18px] justify-center sm:flex-row flex-col items-center '>
        <div className='flex flex-col pb-8'>
          <div className='xl:max-w-[600px] lg:max-w-[500px] sm:max-w-[300px] lg:mb-[48px] mb-[32px] '>
            <h1 className='xl:text-7xl lg:text-6xl md:text-4xl text-3xl font-poppins font-bold text-black mb-6'>
              The Biggest Jackpots
            </h1>
            <p className='xl:text-xl lg:text-base md:text-sm font-poppins font-light text-dark-secondary'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className='flex md:gap-8 gap-2 sm:justify-normal justify-center'>
            <div>
              <img
                className='lg:w-[120px] md:w-[100px] w-[100px]'
                src={googlePlay}
                alt='google-play-button'
              />
            </div>
            <div>
              <img
                className='lg:w-[120px] md:w-[100px] w-[100px]'
                src={appStore}
                alt='app-store-button'
              />
            </div>
          </div>
        </div>
        <div className='my-auto relative xl:w-[840px] lg:w-[740px] md:w-[480px] sm:w-[250px]'>
          <img
            src={HomePageImage}
            alt='home-page-img'
          />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='md:p-[16px] sm:p-[10px] p-[16px] bg-transparent rounded-full border-[1px] border-[#ffffffcf]'>
              <div className='md:p-[16px] sm:p-[10px] p-[16px] bg-transparent rounded-full border-[1.5px] border-[#ffffffcf]'>
                <div className='md:py-[26px] md:pr-[26px] md:pl-[30px] sm:py-[15px] sm:pr-[15px] sm:pl-[17px] py-[26px] pr-[26px] pl-[30px] bg-[#ffffffcf] rounded-full'>
                  <img
                    className='sm:w-[20px] md:w-full w-full'
                    src={play}
                    alt='play-button'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
