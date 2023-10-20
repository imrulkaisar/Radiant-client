import ProductCard from "./ProductCard";

const ProductsArchive = ({ products = [] }) => {
  return (
    <div className="grid lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard key={product._id} data={product} />
      ))}
    </div>
  );
};

export default ProductsArchive;
