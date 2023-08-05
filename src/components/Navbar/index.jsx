import Logo from '../../assets/xlottery-04.png';
import MobileToggler from '../../assets/mobile-nav-toggle.svg';
import Cross from '../../assets/cross.svg';
import { useState } from 'react';
import Button from '../Button';
import { navList } from '../../constants';
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const selectedPage = 'home';
  return (
    <>
      <div className='flex z-50 sticky top-0 justify-between py-6 xl:px-[100px] lg:px-[60px] md:px-6 sm:px-10 px-8 bg-white-secondary'>
        {/* Nav Left */}
        <div className='flex lg:gap-4 md:gap-2 w-full justify-between'>
          <div className='p-1.5'>
            <img
              width={140}
              src={Logo}
              alt='logo'
            />
          </div>
          <ul className='md:flex lg:gap-12 md:gap-8 text-black font-light xl:text-base md-lg:text-sm md:text-xs items-center hidden'>
            {navList?.map((ele) => (
              <li
                key={ele}
                className={`${
                  selectedPage === ele
                    ? 'font-semibold border-b-2 border-yellow-400'
                    : ''
                } uppercase`}
              >
                {ele}
              </li>
            ))}
            <li>
              <div>
                <Button
                  text='Start Now'
                  backgroundColor='bg-primary'
                  textColor='text-white'
                />
              </div>
            </li>
          </ul>
        </div>
        {/* Nav Right */}
        <div className='md:flex items-center xl:gap-8 lg:gap-5 md:gap-3 md:flex-row flex-col-reverse gap-2 hidden'></div>
        {/* Mobile Nav Icon */}
        <div
          className='md:hidden block w-[40px] my-auto'
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <img
            className={`${showMobileNav ? 'hidden' : ''}`}
            src={MobileToggler}
            alt='mobile-nav-toggler'
          />
          <img
            className={`m-auto ${showMobileNav ? '' : 'hidden'}`}
            src={Cross}
            width={30}
            alt='mobile-nav-toggler'
          />
        </div>
        {/* Mobile Menu */}
        <ul
          className={`w-full pb-9 px-9 absolute ${
            showMobileNav ? 'block' : 'hidden'
          } md:hidden bg-white-secondary top-[102px] left-0`}
        >
          {navList?.map((ele) => (
            <li key={ele}>
              <div>
                <div
                  className={`${
                    selectedPage === ele
                      ? 'font-semibold border-b-2 border-yellow-400'
                      : ''
                  }
                  inline-block cursor-pointer pt-9 font-secondary-font text-md uppercase transition-all             `}
                >
                  {ele}
                </div>
              </div>
            </li>
          ))}
          <li className='pt-9 '>
            <div>
              <Button
                text='Start Now'
                backgroundColor='bg-primary'
                textColor='text-white'
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
