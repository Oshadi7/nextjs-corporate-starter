import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

interface ClientsProps {
  data: {
    heading: string;
    picture: Picture;
  };
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

export default function Clients({ data }: ClientsProps) {
  // Get the image URL using the getStrapiMedia helper
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
   
    <section className="py-12 text-white bg-black">
      <div className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-white text-2xl font-light mb-8">{data.heading}</h1>
        <div className="relative">
      </div>
    <Image
          src={imgUrl || ""}
          alt={data.picture.data.attributes.alternativeText || "none provided"}
          className="object-contain h-58 sm:h-58 "
          width={100}
           height={100}
        />
     
  </div>
  </div>
  
</section>

  );
}