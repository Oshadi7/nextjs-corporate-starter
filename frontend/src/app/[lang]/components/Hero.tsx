import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";


interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (

    <section className=" inset-0 bg-container h-full bg-top opacity-100" 
    style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',}}
    >
      <header className="container p-6 flex justify-between items-center">
        <div className="text-xl font-bold pl-20">CARDIFF APP DEVELOPERS</div>
        <nav className="space-x-10">
          <a href="#" className="text-gray-300 hover:text-white">Portfolio</a>
          <a href="#" className="text-gray-300 hover:text-white">Services</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
        </nav>
      </header>
      
     
       <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">

        <div className="text-12xl">
          <div className="text-12xl font-bold leading-none text-designText">
            <h1>{data.title}</h1>
          </div>

          <div className="text-12xl font-bold leading-none text-developmentText">
            <h1>{data.title1}</h1>
            <h1>{data.title2}</h1>
          </div>

          <div className="text-12xl font-bold leading-none text-designText">
            <h1>{data.title3}</h1>
            <h1>{data.title4}</h1>
          </div>

        </div>
        </div>


    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 justify-center p-12  sm:py-12 lg:py-24 lg:flex-row lg:mx-0">
      <div className="text-end pl-20">
        <p className="text-white text-2xl lg:text-3xl font-semibold pb-12">
        {data.description }
        </p>
      <div>
        
          
        <button className="relative px-[80px] py-6 text-white text-2xl font-bold rounded-full transition-all overflow-hidden bg-black 
                          before:absolute before:inset-0 before:rounded-full before:border-4 before:border-[#D9F509] before:transition-all before:duration-300
                          after:absolute after:inset-2 after:rounded-full after:border-4 after:border-[#767676] after:content-[''] after:block">
          Find out more
        </button>
        </div>
      </div>
    </div>
    
        
    
    </section>
  );
}
