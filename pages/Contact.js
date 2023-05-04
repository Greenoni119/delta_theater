import React from 'react';
import Nav from '@/components/Nav';
const Contact = () => {

  const containerStyle = {
    position: 'relative',
    backgroundImage: 'url(bg_night.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    color: '#fff',
  };

  const layerStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#3f3f46',
    opacity: 0.5,
    zIndex: 0,
  };

  return (
    <div style={containerStyle}>
      <Nav/>
      <div style={contentStyle} className='pt-10'>

        <h1 className='text-center text-5xl p-5 text-red-400'> Our Contact</h1>
        <div className='m-5'>
          <h1 className='text-center text-3xl pb-3 text-red-400'>Address</h1>
          <p className='text-center text-xl text-teal-300'>123 Camel Street, <br /> Brentwood, CA 94513</p>
        </div>

        <div className='flex justify-center '>

          <div className='m-5'> 
          <h1 className='text-4xl pb-3 text-red-400'>Email</h1>
            <p className='text-teal-300'>regal@gmail.com</p> 
          </div>

          <div className='m-5'> 
          <h1 className='text-4xl pb-3 text-red-400'>Phone</h1>
            <p className='text-teal-300'>111-222-3333</p> 
          </div>

        </div>

        <div className='text-center m-5'>
        <h1 className='text-center text-4xl pb-3 text-red-400'>We Are Hiring!</h1>
        <form action='' method='POST' className=' mx-auto flex flex-col w-full md:w-1/2'>
                      <input type="text" name='Full Name' placeholder='Name'className='p-2 bg-transparent border-4 border-teal-300 text-red-400 focus:outline-none' />
                      <input type="text" name='Email' placeholder='Mobile'className=' my-4 p-2 p-2 bg-transparent border-4 border-teal-300 text-red-400 focus:outline-none' />
                      <input type="text" name='Email' placeholder='Email'className=' my-4 p-2 p-2 bg-transparent border-4 border-teal-300 text-red-400 focus:outline-none' />
                      <button className='text-teal-300 text-2xl bg-transparent border-4 border-red-400  my-8 py-2 px-10 mx-auto flex items-center hover:scale-110 duration-200'>Send</button>
                    </form>
        </div>
      </div>

      <div style={layerStyle}></div>
    </div>
  );
};

export default Contact;
