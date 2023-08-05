export default function Container({ className, children }) {
  return (
    <div
      className={`xl:px-[100px] lg:px-[60px] md:px-6 sm:px-10 px-8 ${className} w-screen`}
    >
      <div className='max-w-[1440px] m-auto font-poppins '>{children}</div>
    </div>
  );
}
