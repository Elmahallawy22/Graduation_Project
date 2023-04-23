import { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
function FormForEnterData() {
  const [fullName, setFullname] = useState('');
  const [gender, setGender] = useState('Choose Your Gander');
  const [gen, setGen] = useState('');
  const [birthday, setBirthday] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [education, setEducation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [secondPhonNumber, setSecondPhonNumber] = useState('');
  const [pediaticPrice , setPediaticPrice] = useState('')
  const [eaderlyPrice , setEaderlyPrice] = useState('')
  const [specialPrice , setSpecialPrice] = useState('')
  const [emergencyPrice , setEmergencyPrice] = useState('')
  const [womanPrice , setWomanPrice] = useState('')
  const [soulPrice , setSoulPrice] = useState('')
  const handleForm = () => {
    console.log(fullName)
    console.log(userDescription)
    console.log(education)
    console.log(phoneNumber)
    console.log(secondPhonNumber)
    console.log(birthday)
    console.log(gen)
  }
  return (
    <form className="flex-1 px-2 md:px-5 py-7 space-y-6 xl:border-2 xl:border-slate-500 rounded-md" onSubmit={(e) => { e.preventDefault() }}>
      
      <input type="text" id="full-name"
        onChange={(e) => setFullname(e.target.value)}
        value={fullName}
        required
        placeholder="Your Full Name"
        className="border-2 border-gray-500 w-full text-xl p-1 md:text-2xl md:p-2 rounded-lg" />

      <div className="flex space-y-6 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row">
        <div className={`relative border-2 border-gray-500 text-xl p-1 md:text-2xl md:p-2
          rounded-lg flex-1 flex items-center z-20 ${gender === 'Choose Your Gander' ? 'text-gray-400' : ''}`}>
          <div className="w-full flex justify-between items-center"
            onClick={()=>{ document.getElementById('select').style.display = 'block'}}>
          {gender}
          <MdKeyboardArrowDown className="cursor-pointer text-4xl text-black"/>
          </div>
          <ul id='select' className={`absolute -bottom-20 left-0 bg-gray-200 w-full space-y-1 text-black py-2 z-10 hidden rounded-b-lg`} >
            <li className="border-b-2 border-gray-400 pl-5 cursor-pointer "
              onClick={()=>{ document.getElementById('select').style.display = 'none'; setGender("I'm a Male") ; setGen('male')}}
            >I'm a Male</li>
            <li className="pl-5 cursor-pointer "
              onClick={()=>{ document.getElementById('select').style.display = 'none'; setGender("I'm a Female");setGen('female')}}
            >I'm a Female</li>
          </ul>
        </div>
        <div className="flex justify-between border-2 border-gray-500 text-xl p-1 md:text-2xl md:p-2 rounded-lg flex-1 flex items-center">
          <span>Your Birthday: </span>
          <input type="date" onChange={(e) => setBirthday(e.target.value)} className={`${birthday === '' ? 'text-gray-400' : ''}`} />
        </div>
      </div>
        <input type="text" id="education"
        onChange={(e) => setEducation(e.target.value)}
        value={education} required
        placeholder="Your Education"
        className="border-2 border-gray-500 w-full  text-xl p-1 md:text-2xl md:p-2 rounded-lg" />
      <div className="flex space-y-6 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row">
        <div className="border-2 border-gray-500 text-xl p-1 md:text-2xl md:p-2 rounded-lg flex-1 flex items-center">
          <span className="border-r-2 border-gray-500 pr-2 mr-2 flex items-center"><img src="egypt.png" width='25px' className="mr-1" /> +20</span>
          <input type="text"
            id="second-phone"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            required
            placeholder="Your Phone Number"
            className="flex-1" />
        </div>
        <div className="border-2 border-gray-500 text-xl p-1 md:text-2xl md:p-2 rounded-lg flex-1 flex items-center">
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
        placeholder="Write About Your Skills and Experiance ..." rows='5'
        value={userDescription} required
        onChange={(e) => setUserDescription(e.target.value)}
      ></textarea>
      <div className="border-2 border-gray-500 w-full text-xl p-1 md:text-2xl md:p-2 rounded-lg flex justify-between lg:pr-36">
        <span className="truncate flex-1">The price of Pediatic Nursing </span>
        <div className=" ml-2 pl-1 md:ml-12 md:pl-2 border-l-2 border-gray-400">
        <input  placeholder="price" className="w-11 md:w-14"
        value={pediaticPrice} onChange={(e)=>{setPediaticPrice(e.target.value)}}/>
        <span>$</span>
        </div>
      </div>
      <div className="border-2 border-gray-500 w-full text-xl p-1 md:text-2xl md:p-2 rounded-lg flex justify-between lg:pr-36">
        <span className="truncate flex-1">The price of Eaderly Nursing </span>
        <div className=" ml-2 pl-1 md:ml-12 md:pl-2 border-l-2 border-gray-400">
        <input  placeholder="price" className="w-11 md:w-14" 
        value={eaderlyPrice} onChange={(e)=>{setEaderlyPrice(e.target.value)}}/>
        <span>$</span>
        </div>
      </div>
      <div className="border-2 border-gray-500 w-full text-xl p-1 md:text-2xl md:p-2 rounded-lg flex justify-between lg:pr-36">
        <span className="truncate flex-1">The price of Special Nursing </span>
        <div className=" ml-2 pl-1 md:ml-12 md:pl-2 border-l-2 border-gray-400">
        <input  placeholder="price" className="w-11 md:w-14"
        value={specialPrice} onChange={(e)=>{setSpecialPrice(e.target.value)}}/>
        <span>$</span>
        </div>
      </div>
      <div className="border-2 border-gray-500 w-full text-xl p-1 md:text-2xl md:p-2 rounded-lg flex justify-between lg:pr-36">
        <span className="truncate flex-1">The price of Emergency Nursing </span>
        <div className=" ml-2 pl-1 md:ml-12 md:pl-2 border-l-2 border-gray-400">
        <input  placeholder="price" className="w-11 md:w-14"
        value={emergencyPrice} onChange={(e)=>{setEmergencyPrice(e.target.value)}}/>
        <span>$</span>
        </div>
      </div>
      <div className="border-2 border-gray-500 w-full text-xl p-1 md:text-2xl md:p-2 rounded-lg flex justify-between lg:pr-36">
        <span className="truncate flex-1">The price of Woman Nursing </span>
        <div className=" ml-2 pl-1 md:ml-12 md:pl-2 border-l-2 border-gray-400">
        <input  placeholder="price" className="w-11 md:w-14" 
        value={womanPrice} onChange={(e)=>{setWomanPrice(e.target.value)}}/>
        <span>$</span>
        </div>
      </div>
      <div className="border-2 border-gray-500 w-full text-xl p-1 md:text-2xl md:p-2 rounded-lg flex justify-between lg:pr-36">
        <span className="truncate flex-1">The price of Psychiatric Nursing </span>
        <div className=" ml-2 pl-1 md:ml-12 md:pl-2 border-l-2 border-gray-400">
        <input  placeholder="price" className="w-11 md:w-14"
        value={soulPrice} onChange={(e)=>{setSoulPrice(e.target.value)}}/>
        <span>$</span>
        </div>
      </div>

      <div className="flex justify-end pr-5">
        <button type="submit" className="bg-main text-white text-2xl font-semibold px-3 md:px-6 py-2 rounded-lg text-end"
          onClick={() => { handleForm() }}>Save Data</button>
      </div>
    </form>
  )
}
export default FormForEnterData;