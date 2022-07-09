import { useRouter } from "next/router";
import Dashboard from "../layouts/Dashboard";

export default function Product() {
  const router = useRouter();

  return (
    <Dashboard>
      <div className="flex flex-col ">
        <h1 className="text-xl font-semibold">Ventilador zap</h1>
        <div className="grid gap-4 p-4 mt-4 bg-gray-200 rounded-md md:grid-cols-2">
          <div className="w-full h-40 bg-gray-400 rounded-md"></div>
          <div className="flex flex-col space-y-4">
            <p className="">
              Nome: <b>Ventilador zap</b>
            </p>
            <p className="">
              Fabricante: <b>Whatsapp</b>
            </p>
            <p className="">
              Nota média: <b className="text-yellow-500">4.5 ★</b>
            </p>
            <div>
              <button
                onClick={() => router.push("/new-rating")}
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
            <div className="flex items-center justify-between p-4 space-x-4 border-b border-black">
              <div className="flex items-center space-x-4">
                <div className="px-1 py-3 border-2 border-green-500 rounded-full">
                  <p className="font-semibold text-yellow-500">4.5 ★</p>
                </div>
                <p className="text-gray-700">
                  Melhor ventilador que já comprei, principalmente porque é do
                  Whatsapp
                </p>
              </div>
              <p className="font-semibold">23/06/2021</p>
            </div>
            <div className="flex items-center justify-between p-4 space-x-4 border-b border-black">
              <div className="flex items-center space-x-4">
                <div className="px-1 py-3 border-2 border-green-500 rounded-full">
                  <p className="font-semibold text-yellow-500">4.5 ★</p>
                </div>
                <p className="text-gray-700">
                  Melhor ventilador que já comprei, principalmente porque é do
                  Whatsapp
                </p>
              </div>
              <p className="font-semibold">23/06/2021</p>
            </div>
            <div className="flex items-center justify-between p-4 space-x-4 border-b ">
              <div className="flex items-center space-x-4">
                <div className="px-1 py-3 border-2 border-green-500 rounded-full">
                  <p className="font-semibold text-yellow-500">4.5 ★</p>
                </div>
                <p className="text-gray-700">
                  Melhor ventilador que já comprei, principalmente porque é do
                  Whatsapp
                </p>
              </div>
              <p className="font-semibold">23/06/2021</p>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
