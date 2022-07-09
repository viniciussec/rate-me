import { useRouter } from "next/router";

export default function ProductCard() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/product")}
      className="flex flex-col p-4 bg-gray-200 rounded-md cursor-pointer"
    >
      <div className="w-full h-40 bg-gray-400 rounded-md"></div>
      <div className="flex justify-between mt-4 font-semibold">
        <p>Ventilador Zap</p>
        <p className="text-yellow-500">4.5 ★</p>
      </div>
    </div>
  );
}
