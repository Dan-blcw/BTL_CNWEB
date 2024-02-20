import { useEffect, useState } from "react";
import productApi from "../../../apis/productApi";

export default function useProductDetail(id) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await productApi.get(id);
        setProduct(result);
      } catch (error) {
        console.log("Failed to fetch product", error);
      }
      setLoading(false);
    })();
  }, [id]);

  return { product, loading };
}
