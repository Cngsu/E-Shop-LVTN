import getProductById from "@/actions/getProductById";
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import NullData from "@/app/components/NullData";
import getCurrentUser from "@/actions/getCurrentUser";
import AddRating from "./AddRating";
import ListRatings from "./ListRating";
import getProducts, { IProductParams } from "@/actions/getProducts";
import ProductCard from "@/app/components/products/ProductCard";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();

  if (!product) {
    return <NullData title="Oops! Product with the given id does not exist." />;
  }

  const similarProductsParams: IProductParams = {
    category: product.category,
  };
  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const similarProducts = await getProducts(similarProductsParams);
  const sixSimilarProducts = similarProducts.filter((similarProduct) => similarProduct.id !== product.id).slice(0, 6);
  const shuffledProducts = shuffleArray(sixSimilarProducts);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="mt-20 flex flex-col gap-4">
          <AddRating user={user} product={product} />
          <ListRatings product={product} />
        </div>
        <div className="text-zinc-900 text-2xl mt-4">Similar Products:</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {sixSimilarProducts.map((similarProduct: any) => (
              <ProductCard
                key={similarProduct.id}
                data={similarProduct}
                shuffledProducts={shuffledProducts}
                />
                ))}
              </div>
      </Container>
    </div>
  );
};

export default Product;
