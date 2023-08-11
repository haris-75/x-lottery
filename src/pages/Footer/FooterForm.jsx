import Input from '../../components/Input';
import Button from '../../components/Button/index';

export default function FooterForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const data = {
      firstName: elements.namedItem('first-name').value,
      lastName: elements.namedItem('last-name').value,
      email: elements.namedItem('email').value,
      phone: elements.namedItem('phone').value,
      subject: elements.namedItem('subject').value,
      message: elements.namedItem('message').value,
    };
    alert(`Here's your data: ${JSON.stringify(data, undefined, 2)}`);
  }
  return (
    <div className='text-black bg-white lg:p-8 md:p-6 py-4 px-8 rounded-3xl -translate-y-[100px] shadow-xl'>
      <div className='flex flex-col gap-4 text-center xl:max-w-[500px] lg:max-w-[400px] md:max-w-[350px] md:mb-8 mb-4 mx-auto'>
        <h1 className='font-semibold lg:text-xl text-base capitalize'>
          leave a message
        </h1>
        <p className='font-light lg:text-base text-sm '>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit}
      >
        <div className='flex gap-8'>
          <Input
            type='text'
            label='First Name'
            id='first-name'
          />
          <Input
            type='text'
            label='Last Name'
            id='last-name'
          />
        </div>
        <Input
          type='email'
          label='Email'
          id='email'
        />
        <Input
          type='text'
          label='Phone'
          id='phone'
        />
        <Input
          type='text'
          label='Subject'
          id='subject'
        />
        <Input
          type='textarea'
          label='Message'
          id='message'
        />
        <div className='m-auto'>
          <Button
            text='Start Now'
            backgroundColor='bg-primary'
            textColor='text-white'
          />
        </div>
      </form>
    </div>
  );
}
