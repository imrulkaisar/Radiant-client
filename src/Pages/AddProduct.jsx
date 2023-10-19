import PageHeader from "../Components/PageHeader";

const AddProduct = () => {
  return (
    <div>
      <PageHeader
        title="Add Product"
        steps={[{ title: "Products", link: "/products" }]}
      />
    </div>
  );
};

export default AddProduct;
