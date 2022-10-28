import Head from "next/head";
import Image from "next/image";
import Index from "../Components/Index";
import sanityClient, { urlFor } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Atest from "../Components/Atest";
const Home = ({ products, bannerData }) => {
  return (
    <>
      {/* main content */}

      <Index />
      {/* {console.log(products)} */}

      {/* development constent */}
      <div className="products">
        its a product page
        <div>
          {products.map((product) => (
            <>
              <Atest key={product._id} product={product} />
                
              
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await sanityClient.fetch(query);
  // {
  //   title,
  //   name,
  //   image{
  //     asset->{
  //       _id,
  //       url
  //     }
  //   }

  // }`);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await sanityClient.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
