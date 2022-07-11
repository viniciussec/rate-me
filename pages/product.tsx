import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { ProductProps } from "../components/ProductCard";
import Dashboard from "../layouts/Dashboard";
import API from "../services/api";
import Image from "next/image";

export default function Product() {
  const router = useRouter();

  const [product, setProduct] = useState<ProductProps>();
  const [averageRate, setAverageRate] = useState(0);

  useEffect(() => {
    async function loadProduct() {
      if (router.query.id) {
        const response = await API.get("/products?id=" + router.query.id);

        setProduct(response.data[0]);
      }
    }
    loadProduct();
  }, [router.query.id]);

  useEffect(() => {
    async function loadAverageRating(product: ProductProps | undefined) {
      fetch(`${process.env.NEXT_PUBLIC_SERVERLESS_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product }),
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setAverageRate(data);
          });
        }
      });
    }

    loadAverageRating(product);
  }, [product]);

  if (!product) {
    return <LoadingScreen></LoadingScreen>;
  }

  return (
    <Dashboard>
      <div className="flex flex-col ">
        <h1 className="text-xl font-semibold">{product?.name}</h1>
        <div className="flex justify-around p-4 mt-4 bg-gray-200 rounded-md">
          <div className="flex items-center justify-center rounded-md">
            {!product.imageUrl && (
              <div className="flex items-center justify-center w-20 h-20 text-xl font-semibold bg-gray-400 rounded-full">
                ?
              </div>
            )}
            {product.imageUrl && (
              <Image
                className="rounded-full"
                width="100%"
                height="100%"
                src={product?.imageUrl}
                alt="Imagem"
              ></Image>
            )}
          </div>
          <div className="flex flex-col space-y-4">
            <p className="">
              Nome: <b>{product?.name}</b>
            </p>
            <p className="">
              Fabricante: <b>{product?.manufacturer}</b>
            </p>
            <p className="">
              Nota média:
              <b className="text-yellow-500">{averageRate} ★</b>
            </p>
            <div>
              <button
                onClick={() => router.push("/new-rating?id=" + product?.id)}
                className="px-2 py-1 text-white bg-green-600 rounded-md"
              >
                Avalie este produto
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 space-y-4">
          <p className="text-xl font-semibold">Avaliações</p>
          <div className="space-y-4 bg-gray-200 rounded-md">
            {product?.ratings.map((rating, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 space-x-4 border-b border-black"
              >
                <div className="flex items-center space-x-4">
                  <div className="px-1 py-1 border-2 border-green-500 rounded-full">
                    <p className="font-semibold text-yellow-500">
                      {rating.rating}★
                    </p>
                  </div>
                  <p className="text-gray-700">{rating.comment}</p>
                </div>
                <p className="font-semibold">23/06/2021</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
