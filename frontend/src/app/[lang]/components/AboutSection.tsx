import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";



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

interface AboutSectionProps {
  data: {
    id: string;
    description: string;
    description1: string;
    picture: Picture;
    
  };
}

export default function AboutSection({ data }: AboutSectionProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (

    <section>
      <div className=" inset-0 bg-container h-full bg-top opacity-100"
          style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',height:'863px'}}>
            <div className="container grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-2 justify-center p-12  sm:py-12 lg:py-24 lg:flex-row lg:mx-0 ">
              <div className="text-end pl-20">
                <p className="text-white text-3xl font-bold leading-none text-designText">{data.description }</p>
              <div>
        
            </div>
      </div>
      </div>
      
    </div>
    <div className="container grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-2 justify-center p-12  sm:py-12 lg:py-24 lg:flex-row lg:mx-0 text-end pl-20">
      <p className="text-white text-3xl font-regular leading-none text-designText">{data.description1 }</p>
    </div>
    
    </section>

   
  );
}
