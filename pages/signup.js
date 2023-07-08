import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import { StateContext } from '../Components/Layout';
import { useEffect } from 'react';
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const USER_REGEX = /^[a-zA-Z\s]{5,}$/;    //reg for name which contain space and charachters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const {asNurse , setAsNurse}  = useContext(StateContext)
  const [chooseUser, setChooseUser] = useState(false)
  const [typeUser, setTypeUser] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPassword, setConPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConPasswordVisible, setIsConPasswordVisible] = useState(false)
  const [isnameFocus, setIsnameFocus] = useState(false);
  const [validName, setValidName] = useState(false);
  const [ismailFocus, setIsmailFocus] = useState(false);
  const [validMail, setValidMail] = useState(false);
  const [ispassFocus, setIspassFocus] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [isconpassFocus, setIsconpassFocus] = useState(false);

  useEffect(() => {
    setValidName(USER_REGEX.test(name));
  }, [name]);
  useEffect(() => {
    setValidPass(PWD_REGEX.test(password));
  }, [password])
  useEffect(() => {
    setValidMail(EMAIL_REGEX.test(email));
  }, [email])

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playball&family=Roboto+Serif:ital,opsz,wght@0,8..144,100;0,8..144,700;1,8..144,100;1,8..144,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
      {chooseUser === true ?
        <div className="flex login" >
          <div className="flex flex-col justify-evenly items-center w-full xl:w-2/4 bg-white">
            <div>
              <p className="text-5xl font-bold">
                Care For You<span className="text-main">.</span>
              </p>
            </div>
            <div className="w-full max-w-md text-center pb-10">
              <h1 className="font-bold text-4xl">Sign Up</h1>
              <p className="text-gray-600 pt-2 pb-4">Nursing, Care, Help</p>
              <h1 className="font-bold text-4xl mb-5">Sign as a <span className='text-main'>{typeUser}</span></h1>
              <form className="pl-3 pr-3 space-y-8" action="#" method="POST" onSubmit={(e) => {
                handleSubmit(e)
              }}>
                <div>
                  <input id="user-name"
                    name="name"
                    type="text"
                    value={name}
                    autoComplete="name"
                    required
                    className="w-full my-3 rounded-md border border-gray-300 px-3 py-2 focus:border-main focus:outline-none focus:ring-main sm:text-lg"
                    placeholder="Enter Your Name"
                    onChange={(e) => { setName(e.target.value) }}
                    onFocus={() => setIsnameFocus(true)}
                  />
                  <p className={isnameFocus && !validName ? 'text-start text-red-600 text-md font-medium' : 'hidden'}>You name Should from 4 to 24 characters. </p>
                </div>
                <div>
                  <input id="email-address"
                    name="email"
                    type="email"
                    value={email}
                    autoComplete="email"
                    required
                    className="w-full my-3 rounded-md border border-gray-300 px-3 py-2 focus:border-main focus:outline-none focus:ring-main sm:text-lg"
                    placeholder="Email address"
                    onChange={(e) => { setEmail(e.target.value) }}
                    onFocus={() => setIsmailFocus(true)}
                  />
                  <p className={ismailFocus && !validMail ? 'text-start text-red-600 text-md font-medium' : 'hidden'}>You email should email </p>
                </div >
                <div className='relative'>
                  <input id="password"
                    name="password"
                    type={isPasswordVisible ? 'text' : 'password'}
                    value={password}
                    autoComplete="current-password"
                    required
                    className=" w-full my-3 rounded-md border border-gray-300 px-3 py-2 focus:border-main focus:outline-none focus:ring-main sm:text-lg"
                    placeholder="Password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    onFocus={() => setIspassFocus(true)}
                  />
                  <p className={ispassFocus && !validPass ? 'text-start text-red-600 text-md font-medium' : 'hidden'}>You password Should be up 8 characters. </p>
                  {isPasswordVisible ?
                    <div className='absolute right-5 top-5' onClick={() => setIsPasswordVisible(false)}>
                      <AiFillEyeInvisible className='text-3xl' />
                    </div>
                    :
                    <div className='absolute right-5 top-5' onClick={() => setIsPasswordVisible(true)}>
                      <AiFillEye className='text-3xl' />
                    </div>
                  }
                </div>
                <div className='relative'>
                  <input id="confirmPassword"
                    name="password"
                    type={isConPasswordVisible ? 'text' : 'password'}
                    value={conPassword}
                    autoComplete="current-password"
                    required
                    className="w-full my-3 rounded-md border border-gray-300 px-3 py-2 focus:border-main focus:outline-none focus:ring-main sm:text-lg"
                    placeholder="Confirm a Password"
                    onChange={(e) => { setConPassword(e.target.value) }}
                    onFocus={() => setIsconpassFocus(true)}
                  />
                  <p className={conPassword !== password && isconpassFocus ? 'text-start text-red-600 text-md font-medium' : 'hidden'}>You Confirm Password Should be equal Password </p>
                  {isConPasswordVisible ?
                    <div className='absolute right-5 top-5' onClick={() => setIsConPasswordVisible(false)}>
                      <AiFillEyeInvisible className='text-3xl' />
                    </div>
                    :
                    <div className='absolute right-5 top-5' onClick={() => setIsConPasswordVisible(true)}>
                      <AiFillEye className='text-3xl' />
                    </div>
                  }
                </div>
                <Link href='/userdetails' type="submit"
                  className="w-full my-3 rounded-md bg-main py-2 text-xl font-medium text-white "
                > Sign Up
                </Link>
              </form>
              <p className="text-center text-gray-600 mt-4">
                Do you have an account?{" "}
                <Link href="login"
                  className="text-gray-800 font-semibold underline cursor-pointer"
                > Sign In
                </Link>
              </p>
            </div>
          </div>
          <img src="login.jpg" className="xl:w-2/4 object-cover hidden xl:block" />
        </div>
        :
        <div className="w-full flex justify-center items-center">
          <div className="choose-user-card bg-main px-12 py-16 rounded-lg mt-60">
            <h1 className="text-center text-3xl text-white font-semibold">Choose Your Type Of Users ?!</h1>
            <div className="flex justify-around mt-12">
              <button className="bg-white text-main text-3xl font-bold rounded-full py-1 px-5"
                onClick={() => { setChooseUser(true); setTypeUser('Nusre'); setAsNurse(true) }}>
                Nurse
              </button>
              <button className="bg-white text-main text-3xl font-bold rounded-full py-1 px-5"
                onClick={() => { setChooseUser(true); setTypeUser('Pataint'); setAsNurse(false) }}>
                Patient
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}