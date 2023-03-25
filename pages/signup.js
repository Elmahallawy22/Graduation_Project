import Head from 'next/head';
import { useState } from "react";

export default function Login() {
  const [chooseUser , setChooseUser] = useState(false)
  const [typeUser , setTypeUser] = useState()
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
        {/* Sign Up page */}
        <div>
          <p className="text-5xl font-bold">
            Care For You<span className="text-main">.</span>
          </p>
        </div>
        <div className="w-full max-w-md text-center pb-24">
          <h1 className="font-bold text-4xl">Sign Up</h1>
          <p className="text-gray-600 pt-2 pb-4">Nursing, Care, Help</p>
          <h1 className="font-bold text-4xl">Sign as a {typeUser}</h1>
          <form className="pl-3 pr-3 space-y-8" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full my-3 rounded-md border border-gray-300 px-3 py-2 focus:border-main focus:outline-none focus:ring-main sm:text-lg"
              placeholder="Email address"
              />

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full my-3 rounded-md border border-gray-300 px-3 py-2 focus:border-main focus:outline-none focus:ring-main sm:text-lg"
              placeholder="Password"
              />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full my-3 rounded-md border border-gray-300 px-3 py-2 focus:border-main focus:outline-none focus:ring-main sm:text-lg"
              placeholder="Confirm a Password"
              />
            <button
              type="submit"
              className="w-full my-3 rounded-md bg-main py-2 text-xl font-medium text-white "
              >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Do you have an account?{" "}
            <a 
              href="login"
              className="text-gray-800 font-semibold underline cursor-pointer"
              >
              Sign In
            </a>
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
          onClick={()=>{setChooseUser(true); setTypeUser('Nusre')}}>
            Nurse
          </button>
          <button className="bg-white text-main text-3xl font-bold rounded-full py-1 px-5" 
          onClick={()=>{setChooseUser(true); setTypeUser('Pataint')}}>
            Pataint
          </button>
        </div>
      </div>
    </div>}
    </>
  );
}