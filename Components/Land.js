import {BsArrowRight} from 'react-icons/bs' ;
function Land() {
  return (
    <div className='land flex justify-center pt-48'>
      <div className="container h-full flex flex-col-reverse lg:flex-row justify-between items-center  ">
      
        <div className="text-main self-start flex flex-col items-center lg:items-start pt-5 lg:pt-0 xl:pt-16 lg:flex-1">
          <p className="text-3xl md:text-4xl font-medium pb-4">Love Your Soul</p>
          <p className="text-4xl md:text-7xl font-semibold leading-tight w/12 xl:w-9/12 text-center lg:text-start">
            we pour love and care in every patient.</p>
          <p className="mt-5 text-2xl flex items-center font-medium"><BsArrowRight className='mr-2'/> we make you never lose hope</p>
          <p className='pt-10 w-10/12 text-center lg:text-start pb-5'>We exist to provide you with the best service with the cheapest price and the fastest time, because our job is to make you comfortable and save your life</p>
        </div>

        <div className="img-container lg:hiden lg:flex-2">
          <img src="LogoGoldCir.png" className="logo-land"/>
          <div className="cicle-land"></div>
          <div className="img-contain">
          <div className="img-con">
            <img src="nurse.png"   className="land-image" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Land