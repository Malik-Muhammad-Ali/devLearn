import "./style.css";
// import React from 'react'

const Signin = () => {
  return (
    <>
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div
            className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80)",
            }}
          >
            <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0"></div>
            <div
              className="absolute triangle  min-h-screen right-0 w-16"
              style={{}}
            ></div>
            <a
              href="https://codepen.io/uidesignhub"
              target="_blank"
              title="codepen aji"
              className="flex absolute top-5 text-center text-gray-100 focus:outline-none"
            >
              {/* Fourth Image */}
              <p className="text-xl ml-3">
                Dev<strong>Learn</strong>
              </p>{" "}
            </a>
            <img
              src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
              className="h-96 absolute right-5 mr-5"
            />
            <div className="w-full  max-w-md z-10">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Dev Learn
              </div>
              <div className="sm:text-sm xl:te  xt-md text-gray-200 font-normal">
                {" "}
                Welcome back! Log in to access your personalized quizzes and
                continue your learning journey. With every quiz, track your
                progress and unlock resources tailored to your needs. Stay
                ahead, improve your skills, and let AI guide you to success.
                Sign in now and pick up right where you left off!
              </div>
            </div>
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Welcome Back!
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please sign in to your account
                </p>
              </div>
              <form className="mt-8 space-y-6">
                {/* Email */}
                <div className="relative flex flex-col items-start">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="email"
                    placeholder="example@gmail.com"
                    // value="mail@gmail.com"
                  />
                </div>
                {/* Password */}
                <div className="mt-8 content-center flex flex-col items-start">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Enter your password"
                    // value="*****|"
                  />
                </div>
                {/* Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
                {/* Don't have account */}
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't Have an Account?</span>
                  <a
                    href="#"
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
