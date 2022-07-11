import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Dashboard from "../layouts/Dashboard";
import { ProductProps } from "../components/ProductCard";
import API from "../services/api";
import LoadingScreen from "../components/LoadingScreen";

const Home: NextPage = () => {
  const [products, setProducts] = useState<ProductProps[]>();

  useEffect(() => {
    async function loadProducts() {
      const response = await API.get("/products");

      setProducts(response.data);
    }
    loadProducts();
  }, []);

  if (!products) {
    return <LoadingScreen></LoadingScreen>;
  }

  return (
    <div>
      <Dashboard>
        <div className="flex flex-col w-full h-full">
          <p className="text-xl font-semibold">Melhores produtos</p>
          <div className="grid gap-4 mt-4 md:grid-cols-2">
            {products &&
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Home;
