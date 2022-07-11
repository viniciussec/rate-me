import { useRouter } from "next/router";
import { RatingProps } from "../pages/new-rating";

export type ProductProps = {
  id: number;
  name: string;
  manufacturer: string;
  category: string;
  imageUrl: string;
  description: string;
  ratings: RatingProps[];
};

export default function ProductCard(props: { product: ProductProps }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/product?id=" + props.product.id)}
      className="flex flex-col p-4 bg-gray-200 rounded-md cursor-pointer"
    >
      <div className="w-full h-40 bg-gray-400 rounded-md"></div>
      <div className="flex justify-between mt-4 font-semibold">
        <p>{props.product.name}</p>
        <p className="text-yellow-500">4.5 ★</p>
      </div>
    </div>
  );
}
