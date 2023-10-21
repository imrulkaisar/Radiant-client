import PageHeader from "../Components/PageHeader";
import ProductsArchive from "../Components/ProductsArchive";
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";

const Products = () => {
  const { products } = useContext(DataContext);

  return (
    <>
      <PageHeader title="Products" />
      <section className="py-16">
        <div className="container-area">
          <ProductsArchive products={products} />
        </div>
      </section>
    </>
  );
};

export default Products;
