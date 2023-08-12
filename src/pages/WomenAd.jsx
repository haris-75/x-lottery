import background from '../assets/labybg.png';

export default function WomenAd() {
  return (
    <section
      className='relative'
      id='women-ad'
    >
      <img
        className='w-screen sm:block hidden'
        src={background}
        alt='women-holding-cash'
      />
      <div className='relative sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-center w-[80%] max-w-[1000px] sm:text-white text-dark py-4 sm:m-0 m-auto'>
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
    </section>
  );
}
