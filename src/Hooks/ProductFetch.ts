import React, { useEffect, useState } from "react";
import useFetch from "./API";

const ProductFetch = () => {
  const [ProductList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { GetProduct } = useFetch();

  useEffect(() => {
    const GetProductList = async () => {
      try {
        setLoading(true);
        const products = await GetProduct();
        setProductList(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    GetProductList();
    return () => {};
  }, []);

  return { data: ProductList, loading };
};

export default ProductFetch;
