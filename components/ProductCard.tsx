import { useRouter } from "next/router";
import { RatingProps } from "../pages/new-rating";
import Image from "next/image";

export function loadAverageRating(product: ProductProps) {
  if (product.ratings.length === 0) {
    return (0).toFixed(1);
  }

  let sum = 0;
  product.ratings.forEach((rating) => {
    sum += rating.rating;
  });
  return Number((sum * 1.0) / product.ratings.length).toFixed(1);
}

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
      <div className="flex items-center justify-center flex-1 rounded-md">
        {!props.product.imageUrl && (
          <div className="flex items-center justify-center w-full h-full text-xl font-semibold bg-gray-400 rounded-md">
            ?
          </div>
        )}
        {props.product.imageUrl && (
          <Image
            className="rounded-full"
            src={props.product.imageUrl}
            alt="Imagem"
            width="100%"
            height="100%"
          ></Image>
        )}
      </div>
      <div className="flex justify-between mt-4 font-semibold">
        <p>{props.product.name}</p>
        <p className="text-yellow-500">{loadAverageRating(props.product)} ★</p>
      </div>
    </div>
  );
}
