import { useState } from "react";
import PageHeader from "../Components/PageHeader";
import { useEffect } from "react";
import { apiURL } from "../Contexts/GlobalContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { url } = useParams();
  const [product, setProduct] = useState([]);

  const { name, slug, image, brand, type, price, rating } = product[0] || {};

  console.log(product);

  useEffect(() => {
    // product fetching
    fetch(`${apiURL}/products/${url}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [url]);

  return (
    <div>
      <PageHeader
        title={name}
        steps={[{ title: "Products", link: "/products" }]}
      />
    </div>
  );
};

export default ProductDetails;
