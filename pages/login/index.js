import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { StateContext } from '../../Components/Layout'

export default function Login() {
  const { loginTrue, setLoginTrue } = useContext(StateContext);
  const [chooseDashBoard, setChooseDashBoard] = useState(false);
  const [email, setEmail] = useState('')
  
  useEffect(() => {
    if (email === 'admin1') setChooseDashBoard(true);
  }, [email])
  
  return (
    <div className="flex login" >
      <div className="flex flex-col justify-evenly items-center w-full xl:w-2/4 bg-white">
        <div>
          <p className="text-5xl font-bold">
            Care For You<span className="text-main">.</span>
          </p>
        </div>
        <div className="w-full max-w-md text-center pb-24">
          <h1 className="font-bold text-4xl">Sign In as a </h1>
          <p className="text-gray-600 py-4">Nursing, Care, Help</p>
          <form className="pl-3 pr-3 space6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <input
              id="email-address"
              name="email"
              type="text"
              value={email}
              autoComplete="email"
              required
              className="w-full my-3 rounded-md border border-gray-300 px-3 py-2 focus:border-main focus:outline-none focus:ring-main sm:text-lg"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
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
            <div className="flex justify-between my-3 mb-8">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded-full cursor-pointer border-gray-300 text-main  focus:ring-main"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-1 text-sm font-semibold"
                >
                  Remember me
                </label>
              </div>
              <div className="text-base font-semibold ml-10">
                <a
                  href="#"
                  className="font-bold text-main  hover:text-main"
                > Forgot your password?
                </a>
              </div>
            </div>
            {chooseDashBoard ?
              <a href='/dashboard'
                className="w-full my-3 rounded-md bg-main py-2 px-44 text-xl font-medium text-white "
              >
                Sign in
              </a>
              : <Link href='/' onClick={() => setLoginTrue(true)}
                className="w-full my-3 rounded-md bg-main py-2 px-44 text-xl font-medium text-white "
              >
                Sign in
              </Link>
            }
            <div></div>
          </form>
          <p className="text-center text-gray-600 pt-4">
            Don't have an account?{" "}
            <Link href="signup"
              className="text-gray-800 font-semibold underline cursor-pointer" >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <img src="login.jpg" className="xl:w-2/4 object-cover hidden xl:block" />
    </div>
  );
}