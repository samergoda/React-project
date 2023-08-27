import React, { useEffect, useState } from "react";
import pic from './asset5.jpg'
import { motion } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { useDispatch } from "react-redux";
import { increase } from "../../Redux/Counter";



export default function Home({categories}) {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(items)

let dispatch = useDispatch()

  async function GetData(cate) {
    let { data } = await axios.get(
      `https://swensonhe-dev-challenge.s3.us-west-2.amazonaws.com/categories/${cate}.json`
    );
    // console.log(data)
    setItems(data);
  }

  useEffect(() => {
    GetData(1);
  }, []);

  const handleAddItem = (item) => {
    const isItemExist = selectedItems.some((selectedItem) => selectedItem.id === item.id);
    
    if (isItemExist) {
      alert('This item has already been added.')
      return false
    } else {
      setSelectedItems([...selectedItems, item]);
      return true
    }
  }


  
  function handleToggle(e) {
    setActiveIndex(e);
  }

  return (
    <>
      


      <section  className="bg-white  pb-20 rounded-lg container mx-auto">
        <div
          className="mb-4 border-b flex justify-center items-center
             border-gray-200 dark:border-gray-700"
        >
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
      {categories.map((cate, i) => (
        <li
          key={i}
          className={`mr-2  ${activeIndex === i ? 'bg-[#5DA3A9] hover:bg-[#13919c] text-white rounded-full' : 'bg-[#FAF9F8] text-black rounded-full'}`}
          onClick={() => {handleToggle(i);GetData(i+1)}}>
          <button className="inline-block p-4">{cate.title}</button>
        </li>
      ))}
    </ul>
        </div>

        {items.length === 0 ? (
          <div className="text-center">
            <div role="status">
    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only text-black">Loading...</span>
</div>
          </div>
        ) : (
          <div className="flex m-4 justify-center flex-wrap items-center gap-3">
            
            {items.map((item, i) => (
              
              <motion.div
                onClick={()=>{
                  handleAddItem(item.id) &&
                  dispatch(increase(item.avgBudget))
                  }}
                initial={{ opacity:0 }}
                animate={{ opacity:20 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                key={i}
                className="max-w-[200px] bg-white border border-gray-200 rounded-lg shadow">
                  
                <div className="relative" href="#">
                  <LazyLoadImage 
                    className="rounded-t-lg  "
                    src={pic && item.image }
                    alt={item.title}
                    loading="lazy"/>
                  <i className="fa-solid fa-lg  fa-circle-plus top-4 right-4 absolute hover:text-gray-600 hover:scale-125 duration-100"></i>
                </div>
                <div className="p-5">
                  <h3 className="mb-3  text-gray-700 ">
                    {item.title}
                  </h3>
                  <p className="font-bold">
                    ${item.minBudget}-${item.maxBudget}
                  </p>
                  <p>avg Budget:<span className="font-bold"> ${item.avgBudget}</span> </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
