

export default function NavBar() {
  return (
    <>
      <nav className="bg-black mb-5 rounded-2xl  border-gray-200 dark:bg-gray-900">
        <div className=" bg-black rounded-2xl ">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden rounded-2xl bg-black text-white w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex justify-between   bg-black  flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
             <li>
                <button
                  className="block text-white m-3  py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 dark:text-white"
                  aria-current="page"
                  >
                  Event<span className="text-[#86C6CC]">Pros</span>
                </button>
              </li>
             
                  <div className="flex justify-end items-center ">
                    <li>
                <button className="block text-[#86C6CC]  py-2  m-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Event bulider
                </button> 
              </li>
              <li>
                <button className="block  py-2  m-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Saved
                </button>
              </li>
              <li>
                <button className="bg-[#5DA3A9] hover:bg-[#13919c] m-2 p-2 rounded-lg">Conact Us</button>
              </li>
              </div>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
