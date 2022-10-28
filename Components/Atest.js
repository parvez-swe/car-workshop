import React from "react";
import Image from "next/image";
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const Atest = ({ product: { image, name } }) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(sanityClient) {
    return builder.image(sanityClient);
  }
  return (
    <>
      {/* {console.log(urlFor(image))} */}
      <h1>{name}</h1>
      <div className="relative h-[250px] w-[250px]">
        <h1>{console.log(builder.image(image).width(200).url())}</h1>
        <Image src={`${builder.image(image).width(200).url()}`} alt="sorry" layout="fill" />
      </div>
    </>
  );
};

export default Atest;
