export default function Button({
  icon,
  text,
  backgroundColor,
  textColor,
  iconClass,
  onClick,
  boxShadow,
}) {
  return (
    <button
      className={`flex gap-2 items-center ${backgroundColor} ${textColor} ${
        icon
          ? 'rounded-full px-[0.75rem] py-[0.65rem]'
          : ' rounded-3xl lg:px-10 lg:py-2.5  sm:py-1.5 sm:px-3 py-1 px-3'
      } font-poppins font-medium 
      lg:text-base md:text-sm justify-center ${boxShadow ? 'shadow-btn' : ''}`}
      onClick={onClick}
    >
      {icon ? (
        <div className='sm:w-[20px] lg:w-[25px] w-[18px]'>
          <img
            className={iconClass}
            src={icon}
            alt={`${text}-btn`}
          />
        </div>
      ) : null}

      {text?.toUpperCase()}
    </button>
  );
}
