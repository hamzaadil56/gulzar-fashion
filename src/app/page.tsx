import Image from "next/image";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { UserButton } from "@clerk/nextjs";
import { SignUp } from "@clerk/nextjs";
import Header from "@/components/layout/Header";
import { currentUser } from "@clerk/nextjs";
import Hero from "@/components/layout/Hero";

interface Product {
  title: string;
  description: string;
  image: string;
}

const getProducts = async () => {
  const products = await client.fetch(`*[_type == "products"]{
    title,
    description,
    image
  }`);

  return products;
};
export default async function Home() {
  const user = await currentUser();
  console.log(user);
  const builder = imageUrlBuilder(client);

  const products = await getProducts();

  function urlFor(source: string) {
    return builder.image(source);
  }

  return (
    <main className="min-h-[100vh]">
      <div className="h-[100vh] flex flex-col">
        <Header />
        <Hero />
      </div>

      {/* <div>
        <div>
        </div>
        {products.map((product: Product) => (
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <img src={urlFor(product.image).width(200).url()} alt="pic" />
          </div>
        ))}
      </div> */}
    </main>
  );
}
