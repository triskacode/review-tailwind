/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full scroll-smooth">
      <div className="h-screen w-full relative snap-y snap-mandatory overflow-y-auto">
        <div className="fixed inset-0 -z-10 overflow-x-hidden">
          <img
            className="h-full w-full object-cover filter brightness-50"
            src="https://media.istockphoto.com/photos/asian-chinese-female-doctor-working-on-medical-report-with-laptop-and-picture-id1309783183?b=1&k=20&m=1309783183&s=170667a&w=0&h=M9TeQBEjvv5b0E4SINbc5oFkTBYmi7-eo3RTTBDHjdk="
            alt="background"
          />
        </div>
        {/* header */}
        <header className="snap-start h-20 w-full text-white">
          <div className="container w-fullo h-full flex justify-between items-center p-5 mx-auto">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 stroke-sky-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              <h1 className="text-2xl font-display font-semibold tracking-wide capitalize">
                Marketing agency
              </h1>
            </div>
            <div className="flex items-center">
              <ul className="flex items-center space-x-5 text-xl capitalize">
                <li>Home</li>
                <li>+62 810 2765 7217</li>
              </ul>
            </div>
          </div>
        </header>
        <main className="w-full">
          {/* hero section */}
          <section className="snap-start scroll-mt-20 min-h-[calc(100vh-5rem)] w-full flex text-white overflow-x-hidden">
            <div className="container w-full h-auto flex flex-col justify-center p-5 mx-auto">
              <div className="w-1/2">
                <h1 className="text-7xl font-semibold leading-tight">
                  Data-driven marketing agency
                </h1>
                <p className="text-2xl text-gray-200 my-8">
                  This is a paragraph. To edit this paragraph, click on the text
                  and replace it with your own content.
                </p>
                <button className="px-10 py-5 bg-blue-500 leading-none rounded-lg text-lg font-semibold hover:bg-blue-400 transition">
                  Learn more
                </button>
              </div>
            </div>
          </section>

          <section className="snap-center min-h-screen w-full [clip-path:polygon(0%_100%,0%_20vh,100%_0%,100%_100%)] bg-slate-50 -mb-px 2xl:-mb-1 overflow-x-hidden">
            <div className="w-full h-full bg-slate-200 [clip-path:polygon(0%_100%,0%_0%,100%_0%,100%_calc(100%-20vh))] py-[20vh]">
              <div className="container h-screen flex flex-col justify-center p-5 mx-auto">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center w-full space-x-3 text-gray-500">
                    <hr className="w-16 border-gray-500" />
                    <h2 className="text-xl">Superscript</h2>
                    <hr className="w-16 border-gray-500" />
                  </div>
                  <h1 className="text-7xl text-gray-800 font-display my-5">
                    Block Title
                  </h1>
                  <p className="text-xl text-gray-700">
                    This is a block description. To edit, click and type the
                    text or replace it with your own custom content
                  </p>
                </div>
                <div className="w-full mt-16">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="p-10 rounded bg-slate-50 shadow-lg flex flex-col space-y-8">
                      <svg
                        className="w-16 stroke-2 stroke-sky-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                      <h1 className="text-4xl font-display font-semibold text-gray-700">
                        Feature 1
                      </h1>
                      <p className="text-xl text-gray-500">
                        Add more detail about this feature, such as benefits,
                        appearance, components and value
                      </p>
                    </div>
                    <div className="p-10 rounded bg-slate-50 shadow-lg flex flex-col space-y-8">
                      <svg
                        className="w-16 stroke-2 stroke-sky-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                      <h1 className="text-4xl font-display font-semibold text-gray-700">
                        Feature 1
                      </h1>
                      <p className="text-xl text-gray-500">
                        Add more detail about this feature, such as benefits,
                        appearance, components and value
                      </p>
                    </div>
                    <div className="p-10 rounded bg-slate-50 shadow-lg flex flex-col space-y-8">
                      <svg
                        className="w-16 stroke-2 stroke-sky-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                      <h1 className="text-4xl font-display font-semibold text-gray-700">
                        Feature 1
                      </h1>
                      <p className="text-xl text-gray-500">
                        Add more detail about this feature, such as benefits,
                        appearance, components and value
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-center relative min-h-screen w-full py-[10vh] bg-slate-50 flex items-center overflow-x-hidden">
            <div className="container mx-auto px-5 grid grid-cols-2 gap-10">
              <div>
                <img
                  className="w-full rounded"
                  src="https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA="
                  alt="image"
                />
              </div>
              <div>
                <h2 className="text-xl text-gray-500">Superscript</h2>
                <h1 className="text-6xl text-gray-700 my-8 font-display">
                  Page Title. Replace it with own content
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  This is a block description. To edit this description, click
                  on the text and replace it with your own content. Use this
                  space to convert site visitors into customers with a promotion
                </p>
                <div className="mt-10 flex space-x-5">
                  <button className="px-10 py-4 bg-blue-500 text-white text-2xl font-semibold rounded-lg border-4 border-blue-500 shadow-xl shadow-blue-500/25 leading-none transition hover:bg-blue-400 hover:shadow-blue-400/50 hover:border-blue-400">
                    Buton 1
                  </button>
                  <button className="px-10 py-4 bg-transparent text-blue-500 text-2xl font-semibold rounded-lg border-4 border-blue-500 shadow-xl shadow-blue-500/25 leading-none transition hover:bg-blue-400 hover:shadow-blue-400/50 hover:border-blue-400 hover:text-white">
                    Buton 2
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-center min-h-screen w-full bg-[url(https://images.unsplash.com/photo-1574790398664-0cb03682ed1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)] bg-fixed bg-cover flex flex-col">
            <div className="flex-grow h-full w-full backdrop-filter backdrop-brightness-[.25] flex flex-col">
              <div className="container max-w-4xl flex-grow mx-auto h-full flex flex-col items-center justify-center">
                <div className="text-white text-center">
                  <h1 className="text-6xl font-display">Call to action</h1>
                  <p className="my-10 text-2xl leading-relaxed">
                    This is a call action. To edit it, simply highlight the text
                    and replace it with your own content. Use this call to
                    action to show site visitor s whats they should do next
                  </p>
                  <button className="px-10 py-4 bg-blue-500 text-white text-2xl font-semibold rounded-lg border-4 border-blue-500 shadow-xl shadow-blue-500/25 leading-none transition hover:bg-blue-400 hover:shadow-blue-400/50 hover:border-blue-400">
                    Button 1
                  </button>
                </div>
              </div>
            </div>
          </section>

          <footer className="snap-end min-h-[25vh] bg-slate-800 flex items-center justify-center">
            <div className="container max-w-2xl flex flex-col justify-center items-center space-y-8 text-white">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 stroke-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                <h1 className="text-4xl font-display font-semibold tracking-wide capitalize">
                  Marketing agency
                </h1>
              </div>
              <div>
                <span className="capitalize text-lg text-gray-400">
                  ©&nbsp;2021 Marketing Agency
                </span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;
