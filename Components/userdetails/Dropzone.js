import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { BsFillCameraFill } from 'react-icons/bs'

const Dropzone = () => {
  const [files, setFiles] = useState([]);
  const [isExited, setIsExited] = useState(0);
  const [isDragActive, setIsDragActive] = useState(true);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length && isExited === 0) {
        setFiles([])
        setFiles(previousFiles => [
          ...previousFiles, ...acceptedFiles.map
            (file => Object.assign(file, { preview: URL.createObjectURL(file) }))
        ])
        setIsDragActive(false)
      }
    }, [])
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    size: 1024 * 1000,
    onDrop
  })

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  return (
    <form style={{ width: 'fit-content' }}>
      <div {...getRootProps({})}>
        {/* <input /> */}
        <div className='flex flex-col items-center justify-center gap-4'>
          {isDragActive ? (
            <div className='default-image relative'>
              <img src='person.png' width='250px' height='250px' />
              <span className='right-4 px-11 pb-6 pt-3'>Choose Image</span>
            </div>
          ) : (
            <>
              <div className='loaded-image rounded-md'>
                {files.map(file => (
                  <Image src={file.preview} alt={file.name}
                    width={300} height={400}
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                    className='h-full w-full object-contain' />
                ))}
                <span className='left-0 px-12 text-center py-1 '> Update Your Image</span>
              </div>
            </>
          )}
        </div>
      </div>
    </form>
  )
}
export default Dropzone;