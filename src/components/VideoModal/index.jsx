import { createPortal } from 'react-dom';
import video from '../../assets/video.mp4';
import cross from '../../assets/cross.svg';

const VideoModal = ({ onClose }) => {
  return createPortal(
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.5)',
      }}
      className=' fixed z-[100] isolate grid place-items-center top-0 left-0 w-screen h-screen'
    >
      <div>
        <div className='w-full flex justify-end mb-1'>
          <button
            className='w-[15px] h-[18px] cursor-pointer'
            onClick={onClose}
            title='close'
          >
            <img
              src={cross}
              alt='close'
            />
          </button>
        </div>

        <div>
          <video
            width='100%'
            height='auto'
            controls
          >
            <source
              src={video}
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>,
    document.getElementById('video')
  );
};

export default VideoModal;
