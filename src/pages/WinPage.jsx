import background from '../assets/bigwinbg.png';

export default function WinPage() {
  return (
    <div className='relative'>
      <img
        className='w-screen sm:block hidden'
        src={background}
        alt='big-win-prize'
      />
      <div className='relative sm:absolute sm:top-0 text-center py-4 sm:m-0 m-auto sm:w-1/2 h-full sm:left-1/2'>
        <div className='relative sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-center w-[70%] max-w-[800px] sm:text-white text-dark py-4 sm:m-0 m-auto '>
          <h1 className='font-bold xl:text-6xl lg:text-5xl md:text-4xl text-2xl lg:mb-7 md:mb-4 mb-2'>
            Eleifend, viverra erat a tempus.
          </h1>
          <p className='lg:text-base text-sm'>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets.It has
            survived not only five centuries.
          </p>
        </div>
      </div>
    </div>
  );
}
