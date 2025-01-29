import React from "react";

const Testmonials = () => {
  return (
    <>
      <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              What Our Learners Say
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">
              Hear From Those Who’ve Transformed Their Learning Journey
            </p>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
            <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
              <div className="flex flex-col justify-between flex-1 px-5 py-6">
                {/* <div className="flex-shrink-0">
                  <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                    {" "}
                    Lifestyle{" "}
                  </span>
                </div> */}

                <div className="flex-1 mt-28">
                  <p className="text-2xl font-semibold">
                    <a href="#" title="" className="text-black">
                      {" "}
                      Transforming My Learning Journey in 30 Days!{" "}
                    </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600">
                    DevLearn helped me master new skills in just 30 days with
                    its personalized quizzes. It’s truly a game-changer for
                    anyone looking to accelerate their learning!
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="flex">
                  <div className="flex items-center flex-1 px-6 py-5">
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-1.jpg"
                      alt=""
                    />
                    <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                      {" "}
                      Wade Warren{" "}
                    </span>
                  </div>

                  {/* <a
                    href="#"
                    title=""
                    className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                  >
                    Read more
                    <svg
                      className="w-5 h-5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
              <div className="flex flex-col justify-between flex-1 px-5 py-6">
                {/* <div className="flex-shrink-0">
                  <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                    {" "}
                    Technology{" "}
                  </span>
                </div> */}

                <div className="flex-1 mt-28">
                  <p className="text-2xl font-semibold">
                    <a href="#" title="" className="text-black">
                      {" "}
                      A Must-Have for Efficient Learning!{" "}
                    </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600">
                    The quizzes are tailored to my learning needs, making the
                    process faster and more efficient. Highly recommend this
                    platform to anyone serious about learning.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="flex">
                  <div className="flex items-center flex-1 px-6 py-5">
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-2.jpg"
                      alt=""
                    />
                    <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                      {" "}
                      Leslie Alexander{" "}
                    </span>
                  </div>

                  {/* <a
                    href="#"
                    title=""
                    className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                  >
                    Read more
                    <svg
                      className="w-5 h-5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
              <div className="flex flex-col justify-between flex-1 px-5 py-6">
                {/* <div className="flex-shrink-0">
                  <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                    {" "}
                    Marketing{" "}
                  </span>
                </div> */}

                <div className="flex-1 mt-28">
                  <p className="text-2xl font-semibold">
                    <a href="#" title="" className="text-black">
                      {" "}
                      Revolutionized My Approach to Learning!{" "}
                    </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600">
                    DevLearn's personalized learning paths have taken my skills
                    to the next level. It’s the best tool for anyone looking to
                    grow in their field.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="flex">
                  <div className="flex items-center flex-1 px-6 py-5">
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-3.jpg"
                      alt=""
                    />
                    <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                      {" "}
                      Jenny Wilson{" "}
                    </span>
                  </div>

                  {/* <a
                    href="#"
                    title=""
                    className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                  >
                    Read more
                    <svg
                      className="w-5 h-5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testmonials;
