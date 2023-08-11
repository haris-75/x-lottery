export default function Input({ type, id, label }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          className='border-b-2 py-1 w-full mt-2 h-[100px]'
          type={type}
          id={id}
        />
      ) : (
        <input
          className='border-b-2 py-1 w-full mt-2'
          type={type}
          id={id}
        />
      )}
    </div>
  );
}
