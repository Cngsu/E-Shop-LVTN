
export const dynamic = "force-dynamic";

import getProducts, { IProductParams } from "@/actions/getProducts";
import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
import NullData from "../components/NullData";
import ProductCard from "../components/products/ProductCard";
import moment from "moment";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  const sortedProducts = products.sort((a: any, b: any) =>
    //moment(b.date).diff(moment(a.date))
    b.price - a.price
  );

  //const latestProducts = sortedProducts.slice(0, 12);
  const top12HighestPricedProducts  = sortedProducts.slice(0, 12);

  if (top12HighestPricedProducts.length === 0) {
    return (
      <NullData title="Oops! No products found. Click 'All' to clear filters." />
    );
  }

  // Fisher-Yates shuffle algorithm
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledProducts = shuffleArray(top12HighestPricedProducts);

  return (
    <main className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div>
          <label className="text-zinc-900 text-2xl">
            Featured Products:
          </label>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {shuffledProducts.map((product: any) => {
            return (
              <ProductCard
                key={product.id}
                data={product}
                shuffledProducts={shuffledProducts}
              />
            );
          })}
        </div>
      </Container>
    </main>
  );
}
