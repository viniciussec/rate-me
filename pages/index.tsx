import type { NextPage } from "next";
import ProductCard from "../components/ProductCard";
import Dashboard from "../layouts/Dashboard";

const Home: NextPage = () => {
  return (
    <div>
      <Dashboard>
        <div className="flex flex-col w-full h-full">
          <p className="text-xl font-semibold">Melhores produtos</p>
          <div className="grid gap-4 mt-4 md:grid-cols-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Home;
