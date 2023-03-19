export default function Login() {
  return (
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
          <p className="text-gray-600 py-4">Nursing, Care, Help</p>
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
  );
}