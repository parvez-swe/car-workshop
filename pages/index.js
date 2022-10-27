import Head from "next/head";
import Image from "next/image";
import Index from "../Components/Index";
import sanityClient, { urlFor } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
const Home = ({ products, bannerData }) => {
  return (
    <>
      {/* main content */}

      <Index />
      {console.log(products)}

      {/* development constent */}
      <div className="products">
        its a product page
        <div>
          {products.map((product) => (
            <>
              <div key={product._id}>
                <h1>{product.name}</h1>
                <div className="relative h-[50px] w-[50px]">
                  <Image
                    src={urlFor(product.image)}
                    width={250}
                    height={250}
                    alt="hi"
                    layout="fill"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await sanityClient.fetch(`*[_type == "product"]{
    title,
    name,
    image{
      asset->{
        _id,
        url
      }
    }

  }`);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await sanityClient.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
