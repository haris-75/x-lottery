export default function Button({ icon, text, backgroundColor, textColor }) {
  return (
    <button
      className={`flex gap-2 items-center ${backgroundColor} ${textColor} ${
        icon ? 'rounded-full lg:px-5' : ' rounded-3xl lg:px-10'
      } font-poppins font-medium 
      lg:text-base md:text-sm lg:py-2.5  sm:py-1.5 sm:px-3 py-1 px-3 justify-center`}
    >
      {icon ? (
        <div className='sm:w-[20px] lg:w-[25px] w-[18px]'>
          <img
            src={icon}
            alt={`${text}-btn`}
          />
        </div>
      ) : null}

      {text?.toUpperCase()}
    </button>
  );
}
