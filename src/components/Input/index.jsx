export default function Input({ type, id, label, required }) {
  return (
    <div>
      <label
        className='pl-2'
        htmlFor={id}
      >
        {label}
        {required ? <span className='ml-1 text-red-600'>*</span> : ''}
      </label>
      {type === 'textarea' ? (
        <textarea
          className='pl-2 border-b-2 py-1 w-full mt-2 h-[100px]'
          type={type}
          id={id}
          required={required}
        />
      ) : (
        <input
          className='pl-2 border-b-2 py-1 w-full mt-2'
          type={type}
          id={id}
          required={required}
        />
      )}
    </div>
  );
}
