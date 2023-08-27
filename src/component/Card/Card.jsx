import 'tailwindcss/tailwind.css';
import {  useSelector } from "react-redux";
import { useState } from 'react';


export default function Card(){
    let {counter}=useSelector((state)=>state.counter)
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <section  className="bg-white ms-4 relative p-3 w-96 rounded-lg container mx-auto">
        <div className="font-bold text-center border-b-2">
            <h3 className=" ">Your Event Estimate</h3>
            <p className="mb-4 ">${counter}</p>
            

        </div>
            <ul className="mt-3 text-[#747474]">
                <li className="mb-2 flex justify-between">Staff <span className='font-bold'>{counter}</span> </li>
                <li className="mb-2 flex justify-between">Descreption</li>
                <li className="mb-2 flex justify-between">Drinks</li>
                <li className="mb-2 flex justify-between">Food</li>
            </ul>
            {counter>0?<>
                <button
        className="bg-[#5DA3A9] absolute inset-x-0 bottom-0 hover:bg-[#13919c] w-full mt-8 rounded-full text-white  font-bold uppercase text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Save
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center py-60 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  w-2/4  my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0  bg-[#FAF9F8] rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  border-solid border-slate-200 rounded-t">
                  
                  <button
                    className=" text-black  "
                    onClick={() => setShowModal(false)}
                  >
                    <i class="fa-solid fa-xmark fa-2 absolute right-6"></i>
                  </button>
                </div>
                {/*body*/}
                <div className=" text-center font-bold rounded-full p-6 leading-relaxed flex-auto">
                  <p className="my-4  ">
                  Event Saved!
                  </p>
                  <p>{counter}</p>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

</>:''}
        </section>
        
        </>
    )
}