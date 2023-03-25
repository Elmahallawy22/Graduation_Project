import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillImageFill } from 'react-icons/bs';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px',
  borderWidth: 5,
  borderRadius: 1000,
  borderColor: 'black',
  borderStyle: 'solid',
  backgroundColor: 'bdbdbd',
  // color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: { 'image/*': [] } });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container">
      <div {...getRootProps({ style })} className='relative'>
        <input {...getInputProps()} />
        <img src='person.png' className='w-64' />
        <p className='absolute bottom-8 bg-gray-200 py-1 px-3 flex items-center text-xl rounded' >
          <BsFillImageFill className='mr-2' />Add Image</p>
      </div>
    </div>
  );
}

function Userdetails() {
  return (
    <div className='flex justify-center pt-10 lg:pl-24'>
      <div className='container flex '>
        <div className='mr-10'>
          <StyledDropzone />
        </div>
        <div className='flex flex-col text-white text-2xl font-semibold flex-1 border-2 pt-5 bg-main' >
          <div className='taken-name flex justify-betwee space-x-48 items-center px-9'>
          <div className='flex flex-col '>
              <label htmlFor='fi-name' className='mb-2' >First Name:</label>
              <input type='text' id='fi-name' className='border-2 border-gray-500 rounded w-96 py-1 px-2 placeholder:text-xl placeholder:font-medium' placeholder='Enter Your First Name....' />
            </div>
            <div className='flex flex-col '>
              <label htmlFor='fa-name' className='mb-2' >Family Name:</label>
              <input type='text' id='fa-name' className='border-2 border-gray-500 rounded w-96 py-1 px-2 placeholder:text-xl placeholder:font-medium' placeholder='Enter Your Family Name....' />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default Userdetails;