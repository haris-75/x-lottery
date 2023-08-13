import Container from '../../components/Container';
import list from '../../assets/list.png';
import jackpot from '../../assets/jackpot.png';
import booking from '../../assets/booking.png';
import ImageMarquee from './ImageMarquee';
import arrow from '../../assets/arrow.png';

const LotteryPhaseCard = ({ imageSrc, title, text, number, positionClass }) => (
  <div className='z-20 flex flex-col items-center lg:gap-5 md:gap-3 gap-2 relative shadow-card p-8 rounded-3xl w-fit bg-white'>
    <div>
      <img
        src={imageSrc}
        alt={`${title}-img`}
      />
    </div>
    <h1 className='z-10 font-semibold lg:text-2xl md-lg:text-xl text-lg capitalize'>
      {title}
    </h1>
    <p className='z-10 font-light md:text-sm text-xs xl:max-w-[300px] lg:max-w-[250px] max-w-[200px]'>
      {text}
    </p>
    <div
      className={`absolute text-[10rem] text-white-secondary font-bold ${positionClass}`}
    >
      {number}
    </div>
  </div>
);

export default function LotteryLifeCycle() {
  return (
    <Container id='lottery'>
      <div className='flex-col justify-center items-center pt-[50px] pb-[50px] flex xl:gap-[40px] lg:gap-[30px] gap-[25px]'>
        <div className='flex flex-col items-center text-center justify-center lg:gap-5 md:gap-4 gap-3'>
          <h1 className='font-semibold lg:text-4xl md:text-2xl text-xl capitalize '>
            easily you can win our lottery
          </h1>
          <p className='font-light md:text-base text-sm lg:max-w-[900px] xl:max-[1100px] md:max-w-[600px]'>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between md:gap-10 gap-5 items-center relative'>
          <LotteryPhaseCard
            imageSrc={list}
            title='choose number'
            text='It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets.'
            number={'01'}
            positionClass='-bottom-[45px] -right-[11px]'
          />
          <LotteryPhaseCard
            imageSrc={booking}
            title='buy ticket'
            text='It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets.'
            number={'02'}
            positionClass='-bottom-[45px] -right-[6px]'
          />
          <LotteryPhaseCard
            imageSrc={jackpot}
            title='win jackpot'
            text='It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets.'
            number={'03'}
            positionClass='-bottom-[45px] -right-[11px]'
          />
          <div className='absolute w-full md:h-[50px] lg:[60px] xl:[75px] bg-primary hidden md:block'>
            <div className='flex justify-between md:w-[39%] lg:w-[38%] xl:w-[37%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div>
                <img
                  width={30}
                  src={arrow}
                  alt='arrow'
                />
              </div>
              <div>
                <img
                  width={30}
                  src={arrow}
                  alt='arrow'
                />
              </div>
            </div>
          </div>
        </div>
        <ImageMarquee />
      </div>
    </Container>
  );
}
