import logo from '../../assets/xlottery-03.png';
import Container from '../../components/Container';
import Button from '../../components/Button';
import loc from '../../assets/loc.png';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import pinterest from '../../assets/pinterest.png';
import FooterForm from './FooterForm';

const AddressComponent = ({ title, textPrimary, textSecondary }) => (
  <div>
    <Button
      iconClass='ml-[1px]'
      backgroundColor='bg-primary'
      icon={loc}
    />
    <h1 className='sm:text-xs xs:text-[10px] xs:leading-[10px] text-[8px] leading-[8px] py-2'>
      {title}
    </h1>
    <p className='sm:text-base xs:text-sm xs:leading-4 text-xs leading-3'>
      {textPrimary}
    </p>
    <p className='sm:text-base xs:text-sm xs:leading-4 text-xs leading-3'>
      {textSecondary}
    </p>
  </div>
);

export default function Footer() {
  return (
    <Container
      className='bg-black'
      id='contact'
    >
      <div className='pt-[20px] pb-[50px] flex md:flex-row flex-col justify-between lg:gap-12 md:gap-8 '>
        <FooterForm />
        <div className='text-white flex flex-col gap-8 justify-self-center'>
          <div>
            <div>
              <img
                className='w-[200px]'
                src={logo}
                alt='x-lottery-logo'
              />
            </div>
            <p className='lg:max-w-[500px] md:max-w-[400px] '>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className='flex lg:flex-row md:flex-col w-full justify-between gap-4'>
            <AddressComponent
              title='Contact'
              textPrimary='(012) 345-6789'
              textSecondary='info@xlottery.com'
            />
            <AddressComponent
              title='Address'
              textPrimary='Donec felis urna, pretium'
              textSecondary='ut, convillas sed elit.'
            />
          </div>
          <div className='flex flex-col'>
            <div className='flex gap-4 py-2 '>
              <div>
                <Button
                  iconClass='lg:ml-[5px] lg:my-[0.1rem] ml-[3px] sm:my-0 -my-[1px]'
                  backgroundColor='bg-primary'
                  icon={fb}
                />
              </div>
              <div>
                <Button
                  iconClass='w-[60px] my-[0.1rem]'
                  backgroundColor='bg-primary'
                  icon={insta}
                />
              </div>
              <div>
                <Button
                  iconClass='my-1'
                  backgroundColor='bg-primary'
                  icon={twitter}
                />
              </div>
              <div>
                <Button
                  iconClass='w-[22px] ml-[1px]'
                  backgroundColor='bg-primary'
                  icon={pinterest}
                />
              </div>
            </div>
            <p className='sm:text-base xs:text-sm text-xs'>
              CopyRights 2022 xlottery. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
