import Container from '../components/Container';
const itemsArray1 = [
  {
    title: 'Etiam at tristique sapien',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tristique sapien. Suspendisse ut massa rutrum, gravida nunc in, venenatis sapien. Sed aliquet egestas dui porttitor posuere. Sed commodo turpis id est egestas molestie. Morbi cursus ut metus vitae porta. Pellentesque.',
  },
  {
    title: 'Sed tincidunt est sed erat vulputate,',
    text: 'Donec consequat hendrerit nulla, quis sagittis arcu dictum ut. Fusce eget nisi sem. Integer ornare tempus metus non egestas. Nulla imperdiet a metus quis gravida.',
  },
  {
    title: 'Vestibulum malesuada cursus eros',
    text: 'Cras ornare lectus sem, et accumsan ante ornare ac. Maecenas consequat semper est nec porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
];
const itemsArray2 = [
  {
    title: 'Donec sodales viverra sollicitudin',
    text: 'Morbi sagittis pellentesque ante, commodo placerat lacus dapibus in. Cras vulputate nulla justo, at pellentesque augue pellentesque ut. Nunc congue arcu risus.',
  },
  {
    title: 'Nunc sed tellus ac elit sagittis',
    text: 'Praesent sagittis eget elit sit amet auctor. Aliquam feugiat, purus sed eleifend bibendum, ipsum urna elementum odio, dapibus aliquam mauris mi sed ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas porttitor porta mauris id dignissim.',
  },
  {
    title: 'Aenean gravida in ipsum a scelerisque',
    text: 'Praesent laoreet justo non diam malesuada, non volutpat diam tempor. Curabitur quis risus placerat, vestibulum ante quis, sodales magna.',
  },
];

const ItemCard = ({ title, text }) => (
  <div className='flex flex-col lg:max-w-[500px]'>
    <h1 className='md:text-xl text-base font-medium'>{title}</h1>
    <p className='font-light lg:text-base md:text-sm text-xs'>{text}</p>
  </div>
);

export default function WhyPage() {
  return (
    <Container>
      <div className='flex flex-col justify-between items-center pt-[50px] pb-[50px] md:gap-6 gap-5'>
        <h1 className='font-semibold lg:text-4xl md:text-2xl text-xl'>
          Why Choose xLottery
        </h1>
        <div className='flex md:flex-row flex-col lg:gap-16 md:gap-12 gap-8'>
          <div className='flex flex-col gap-2'>
            {itemsArray1?.map(({ title, text }) => (
              <ItemCard
                key={title}
                title={title}
                text={text}
              />
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {itemsArray2?.map(({ title, text }) => (
              <ItemCard
                key={title}
                title={title}
                text={text}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
