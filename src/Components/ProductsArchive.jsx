import ProductCard from "./ProductCard";

const ProductsArchive = ({ products = [] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch justify-items-center">
      {products.map((product) => (
        <ProductCard key={product._id} data={product} />
      ))}
    </div>
  );
};

export default ProductsArchive;
