import { useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import ProductsArchive from "../Components/ProductsArchive";
import { useState } from "react";
import { apiURL } from "../Contexts/GlobalContext";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // product fetching
    fetch(`${apiURL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
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
