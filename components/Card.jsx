import Image from "next/image";
import React from "react";
import { useState } from "react";

const Card = () => {
   const [show, setShow] = useState(false);
   return (
      <div className="group flex max-w-2xl flex-col items-center justify-center gap-2 rounded-lg border px-3 py-4 md:flex-row">
         <div>
            <img
               className="block w-full md:hidden"
               src="http://via.placeholder.com/640x360"
               alt=""
            />
            <img
               className="hidden w-full md:block"
               src="http://via.placeholder.com/360x640"
               alt=""
            />
         </div>
         <div className="px-2">
            <p
               className={`my-4 after:my-4 after:font-bold 
               after:text-purple-400 after:content-['Hola_este_texto_deberia_de_estar_oculto.'] group-hover:text-red-500 ${
                  show ? "after:block" : "after:hidden"
               }`}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci libero
               impedit esse distinctio exercitationem eveniet accusamus non tempora architecto
               incidunt quasi corporis dolores deleniti numquam ipsam, quibusdam corrupti rem!
            </p>
            <button
               onClick={() => setShow(!show)}
               className="my-3 rounded-xl bg-sky-500 px-5 py-1 text-sm font-bold 
                        text-white hover:bg-sky-700 focus:ring focus:ring-sky-300 
                        dark:bg-purple-400 dark:hover:bg-purple-600 dark:focus:ring-purple-200">
               {!show ? "Show more" : "Show less"}
            </button>
         </div>
      </div>
   );
};

export default Card;
