import {BsFacebook , BsGithub, BsLinkedin} from 'react-icons/bs';
import {CgMail} from 'react-icons/cg';
import {RiWhatsappFill} from 'react-icons/ri';
function Footer() {
  return (
    <div className="footer flex justify-center py-5 bg-main xl:py-8">
      <div className="container flex flex-col items-center text-2xl font-medium text-center text-white space-y-5">
        <img src="logoWhite.png" className='w-40 md:w-44 lg:w-56' />
        <p className='text-lg lg:text-2xl'>Our job is to make you comfortable and save your life</p>
        <div className="flex space-x-1 sm:space-x-3 md:space-x-4">
          <a className='text-blue-600 text-2xl w-10 h-10 rounded-full bg-white flex justify-center items-center'
          href='https://www.facebook.com/youssef.elmahallawy.9/' target='_blank' ><BsFacebook/></a>
          <a className='text-blue-800 text-xl w-10 h-10 rounded-full bg-white flex justify-center items-center'
          href='https://www.linkedin.com/in/youssef-elmahallawy-9115b71a6' target='_blank' ><BsLinkedin/></a>
          <a className='text-green-500 text-2xl w-10 h-10 rounded-full bg-white flex justify-center items-center'
          href='https://wa.me/+201067271096' target='_blank' ><RiWhatsappFill/></a>
          <a className='text-red-700 text-3xl w-10 h-10 rounded-full bg-white flex justify-center items-center'
          href='mailto:elmahallawyyoussef@gmail.com' target='_blank' ><CgMail/></a>
          <a className='text-gray-800 text-2xl w-10 h-10 rounded-full bg-white flex justify-center items-center'
          href='https://github.com/Elmahallawy22' target='_blank' ><BsGithub/></a>
        </div>
        <div className="flex mt-5">
          <img src="playstore.png" className="w-28 md:w-36 lg:w-48 bg-white rounded-lg mr-5" />
          <img src="googlePlay.jpg" className="w-28 md:w-36 lg:w-48 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
export default Footer