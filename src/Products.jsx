import React from "react";
import { Link, Route } from "react-router-dom";

const Products = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "U.S. POLO ASSN. Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Available",
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: 4,
      name: "Lee Cooper Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];

  const linkList = productsData.map((product, index) => {
    return (
      <li key={index}>
        <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  const Product = ({ match, data }) => {
    var product = data.find((p) => p.id == match.params.productId);
    var productData;

    if (product)
      productData = (
        <div>
          <h3> {product.name} </h3>
          <p>{product.description}</p>
          <hr />
          <h4>{product.status}</h4>{" "}
        </div>
      );
    else productData = <h2> Sorry. Product doesn't exist </h2>;

    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "0px 10%",
            width: "80%",
            margin: "auto",
            background: "rgb(255, 255, 255)",
          }}
        >
          {productData}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <div
          style={{
            float: "left",
            padding: "10px",
            width: "30%",
            background: "rgb(240, 240, 240)",
            marginLeft: "auto",
          }}
        >
          <h3> Products</h3>
          <ul
            style={{ listStyleType: "none", padding: "0px", fontSize: "15px" }}
          >
            {" "}
            {linkList}{" "}
          </ul>
        </div>
      </div>

      <Route
        path={`${match.url}/:productId`}
        render={(props) => <Product data={productsData} {...props} />}
      />
      <Route
        exact
        path={match.url}
        render={() => (
          <div style={{ textAlign: "center" }}>Please select a product.</div>
        )}
      />
    </div>
  );
};
export default Products;
