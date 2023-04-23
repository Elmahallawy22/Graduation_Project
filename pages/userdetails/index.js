import Head from 'next/head';
import Dropzone from '../../Components/userdetails/Dropzone';
import FormForEnterData from "../../Components/userdetails/FormForEnterData";
function Userdetails(){
  return(
    <>
    <Head>
        <title>User Details</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playball&family=Roboto+Serif:ital,opsz,wght@0,8..144,100;0,8..144,700;1,8..144,100;1,8..144,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
    <div className="flex justify-center pt-5 lg:pt-10 pb-12"> 
      <div className="container self-stretch flex flex-col items-center xl:flex-row xl:items-start space-8 xl:space-y-0 xl:space-x-6 ">
        <div>
          <Dropzone/>
        </div>
        <FormForEnterData/> 
      </div>
    </div>
    </>
  )
}
export  default Userdetails;