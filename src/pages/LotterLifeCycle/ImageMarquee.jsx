import nvidia from '../../assets/nvidia.png';
import playstation from '../../assets/playstation.png';
import amd from '../../assets/amd.png';
import asus from '../../assets/asus.png';
import xbox from '../../assets/xbox.png';
import nintendo from '../../assets/nintendo.png';
import razor from '../../assets/razor.png';

const ImageContainer = ({ src, alt, classes }) => (
  <div className='slide'>
    <img
      className={classes}
      src={src}
      alt={alt}
    />
  </div>
);
export default function ImageMarquee() {
  return (
    <div>
      <div className='slider w-full xl:max-w-1280px lg-xl:max-w-[1150px] lg:max-w-[1024px] md-lg-[850px] md:max-w-[768px] sm:max-w-[640px] max-w-[350px]'>
        <div className='slide-track'>
          <ImageContainer
            src={nvidia}
            alt='nvidia-logo'
            classes='w-[100px]'
          />
          <ImageContainer
            src={playstation}
            alt='playstation-logo'
            classes='w-[100px]'
          />
          <ImageContainer
            src={amd}
            alt='amd-logo'
            classes='w-[70px]'
          />
          <ImageContainer
            src={asus}
            alt='asus-logo'
            classes='w-[120px]'
          />
          <ImageContainer
            src={xbox}
            alt='xbox-logo'
            classes='w-[80px] '
          />
          <ImageContainer
            src={nintendo}
            alt='nintendo-logo'
            classes='w-[80px] '
          />
          <ImageContainer
            src={razor}
            alt='razor-logo'
            classes='w-[80px] '
          />
          <ImageContainer
            src={nvidia}
            alt='nvidia-logo'
            classes='w-[100px]'
          />
          <ImageContainer
            src={playstation}
            alt='playstation-logo'
            classes='w-[100px]'
          />
          <ImageContainer
            src={amd}
            alt='amd-logo'
            classes='w-[70px]'
          />
          <ImageContainer
            src={asus}
            alt='asus-logo'
            classes='w-[120px]'
          />
          <ImageContainer
            src={xbox}
            alt='xbox-logo'
            classes='w-[80px] '
          />
          <ImageContainer
            src={nintendo}
            alt='nintendo-logo'
            classes='w-[80px] '
          />
          <ImageContainer
            src={razor}
            alt='razor-logo'
            classes='w-[80px] '
          />
        </div>
      </div>
    </div>
  );
}
