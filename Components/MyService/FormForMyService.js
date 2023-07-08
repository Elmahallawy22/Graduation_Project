import { useContext, useState } from "react";
import { StateContext } from '../Layout';
import { MdAddLocationAlt, MdKeyboardArrowDown } from 'react-icons/md'
import useGeoLocation from "../userdetails/useGeoLocation";
import Link from "next/link";

function FormForMyService() {
  const { loginTrue, setLoginTrue, asNurse, setAsNurse } = useContext(StateContext);
  const location = useGeoLocation();
  const [fullName, setFullname] = useState('Youssef Mohamed Ali Elmahallawy');
  const [gender, setGender] = useState('Male');
  const [userLocation, setUserLocation] = useState('Mansoura');
  const [gen, setGen] = useState('');
  const [birthday, setBirthday] = useState('11/11/2000');
  const [userDescription, setUserDescription] = useState("As a nurse, I understand that each patient has unique care needs that require special attention and personalized care.That's why I offer specialized nursing care services to help patients achieve optimal wellness and recovery. My special nursing care services include a range of services tailored to meet the unique needs of each patient.These services may include wound care, medication management, pain management, and patient education.");
  const [education, setEducation] = useState('Mansoura University Faculty of Nursing');
  const [phoneNumber, setPhoneNumber] = useState('01067271096');
  const [secondPhonNumber, setSecondPhonNumber] = useState('01558044849');
  const [pediaticPrice, setPediaticPrice] = useState('12')
  const [eaderlyPrice, setEaderlyPrice] = useState('15')
  const [specialPrice, setSpecialPrice] = useState('00')
  const [emergencyPrice, setEmergencyPrice] = useState('5')
  const [womanPrice, setWomanPrice] = useState('7')
  const [soulPrice, setSoulPrice] = useState('16')

  const priceStyle = "border-2 border-gray-500 w-full text-xl p-1 md:text-2xl md:p-2 rounded-lg flex justify-between lg:pr-36"
  const priceInsideStyle = " ml-2 pl-1 md:ml-12 md:pl-2 border-l-2 border-gray-400"
  const divToHalf = "flex space-y-6 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row"
  const divHalf = "border-2 border-gray-500 text-xl p-1 md:text-2xl md:p-2 rounded-lg flex-1 flex items-center"
  async function fetchtext() {
    let url = "https://ipinfo.io/json?token=d8de901732687f";
    let response = await fetch(url);
    let data = await response.json();
    setUserLocation(data.city);
  }
  const determineLocation = () => {
    if (location.loaded) {
      console.log(JSON.stringify(location));
      fetchtext();
    }
    else setUserLocation('Not avaliable Location');
  }

  return (
    <form className="flex-1 px-2 md:px-5 py-7 space-y-6 xl:border-2 xl:border-slate-500 rounded-md" onSubmit={(e) => { e.preventDefault() }}>
      <input type="text" id="full-name"
        onChange={(e) => setFullname(e.target.value)}
        value={fullName}
        required
        placeholder="Your Full Name"
        className="border-2 border-gray-500 w-full text-xl p-1 md:text-2xl md:p-2 rounded-lg" />
      <div className={divToHalf}>
        <div className={divHalf}>
          <input type="text"
            id="location"
            placeholder="Determine Your Location"
            onChange={(e) => setUserLocation(e.target.value)}
            value={userLocation}
            className={`flex-1`} />
          <span className="pr-2 mr-2 flex items-center text-3xl" onClick={() => { determineLocation() }}><MdAddLocationAlt /></span>
        </div>
        <input type="text" id="education"
          onChange={(e) => setEducation(e.target.value)}
          value={education} required
          placeholder="Your Education"
          className="border-2 border-gray-500 flex-1  text-xl p-1 md:text-2xl md:p-2 rounded-lg" />
      </div>
      <div className={divToHalf}>
        <div className={divHalf}>
          <span className="border-r-2 border-gray-500 pr-2 mr-2 flex items-center"><img src="egypt.png" width='25px' className="mr-1" /> +20</span>
          <input type="text"
            id="second-phone"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            required
            placeholder="Your Phone Number"
            className="flex-1" />
        </div>
        <div className={divHalf}>
          <span className="border-r-2 border-gray-500 pr-2 mr-2 flex items-center"><img src="egypt.png" width='25px' className="mr-1" /> +20</span>
          <input type="text"
            id="second-phone"
            onChange={(e) => setSecondPhonNumber(e.target.value)}
            value={secondPhonNumber}
            placeholder="Your Second Number (Optional)"
            className="flex-1" />
        </div>
      </div>
      <textarea id='user-description'
        className="border-2 border-gray-500 w-full  text-xl p-1 md:text-2xl md:p-2 rounded-lg"
        placeholder="Write About YourSelf." rows='5'
        value={userDescription} required
        onChange={(e) => setUserDescription(e.target.value)}
      ></textarea>
      <div className={divToHalf}>
        <div className={`relative border-2 border-gray-500 text-xl p-1 md:text-2xl md:p-2
          rounded-lg flex-1 flex items-center z-20 ${gender === 'Choose Your Gander' ? 'text-gray-400' : ''}`}>
          <div className="w-full flex justify-between items-center"
            onClick={() => { document.getElementById('select').style.display = 'block' }}>
            {gender}
            <MdKeyboardArrowDown className="cursor-pointer text-4xl text-black" />
          </div>
          <ul id='select' className={`absolute -bottom-20 left-0 bg-gray-200 w-full space-y-1 text-black py-2 z-10 hidden rounded-b-lg`} >
            <li className="border-b-2 border-gray-400 pl-5 cursor-pointer "
              onClick={() => { document.getElementById('select').style.display = 'none'; setGender("I'm a Male"); setGen('male') }}
            >I'm a Male</li>
            <li className="pl-5 cursor-pointer "
              onClick={() => { document.getElementById('select').style.display = 'none'; setGender("I'm a Female"); setGen('female') }}
            >I'm a Female</li>
          </ul>
        </div>
        <div className={`${divHalf} flex justify-between`}>
          <span>Your Birthday: </span>
          <input type="text" onChange={(e) => setBirthday(e.target.value)} value={birthday} className={`${birthday === '' ? 'text-gray-400' : ''}`} />
        </div>
      </div>
      {asNurse &&
        <>
          <div className={priceStyle}>
            <span className="truncate flex-1">The price of Pediatic Nursing </span>
            <div className={priceInsideStyle}>
              <input placeholder="price" className="w-11 md:w-14"
                value={pediaticPrice} onChange={(e) => { setPediaticPrice(e.target.value) }} />
              <span>$</span>
            </div>
          </div>
          <div className={priceStyle}>
            <span className="truncate flex-1">The price of Eaderly Nursing </span>
            <div className={priceInsideStyle}>
              <input placeholder="price" className="w-11 md:w-14"
                value={eaderlyPrice} onChange={(e) => { setEaderlyPrice(e.target.value) }} />
              <span>$</span>
            </div>
          </div>
          <div className={priceStyle}>
            <span className="truncate flex-1">The price of Special Nursing </span>
            <div className={priceInsideStyle}>
              <input placeholder="price" className="w-11 md:w-14"
                value={specialPrice} onChange={(e) => { setSpecialPrice(e.target.value) }} />
              <span>$</span>
            </div>
          </div>
          <div className={priceStyle}>
            <span className="truncate flex-1">The price of Emergency Nursing </span>
            <div className={priceInsideStyle}>
              <input placeholder="price" className="w-11 md:w-14"
                value={emergencyPrice} onChange={(e) => { setEmergencyPrice(e.target.value) }} />
              <span>$</span>
            </div>
          </div>
          <div className={priceStyle}>
            <span className="truncate flex-1">The price of Woman Nursing</span>
            <div className={priceInsideStyle}>
              <input placeholder="price" className="w-11 md:w-14"
                value={womanPrice} onChange={(e) => { setWomanPrice(e.target.value) }} />
              <span>$</span>
            </div>
          </div>
          <div className={priceStyle}>
            <span className="truncate flex-1">The price of Psychiatric Nursing </span>
            <div className={priceInsideStyle}>
              <input placeholder="price" className="w-11 md:w-14"
                value={soulPrice} onChange={(e) => { setSoulPrice(e.target.value) }} />
              <span>$</span>
            </div>
          </div>
        </>}
      <div className="flex justify-end pr-5">
        <Link type="submit" href='/' className="bg-main text-white text-2xl font-semibold px-3 md:px-6 py-2 rounded-lg text-end">Save Data</Link>
      </div>
    </form>
  )
}
export default FormForMyService;