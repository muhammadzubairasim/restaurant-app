import React, { useEffect, useState } from "react";
import CartButton from "./CartButton";
import axios from "axios";

const Products = () => {
  const [menuData, setMenuData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/v1/products");
    setMenuData(response.data.products);
    console.log(menuData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ width: "99vw", margin: "10px" }}>
      <h2> All menu </h2>
      <div
        style={{
          display: "flex ",
          flexWrap: "wrap",
          margin: "10px",
          justifyContent: "space-around",
        }}
      >
        {menuData.length > 0 ? (
          menuData.map((e) => (
            <div
              style={{
                width: "47%",
                border: "1px solid grey",
                boxShadow: "1px 1px 1px 0px grey",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <h5>{e.productName}</h5>
              <p>{e.productDescription}</p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h4>Price - {e.productPrice}$</h4>
                <CartButton />
              </div>
            </div>
          ))
        ) : (
          <h1> loading </h1>
        )}
      </div>
    </div>
  );
};

export default Products;
