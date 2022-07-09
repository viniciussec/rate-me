import { useRouter } from "next/router";

export default function Dashboard(props: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen bg-red-500">
      <div className="flex items-center justify-center w-full bg-white shadow-lg h-14">
        <div className="flex items-center justify-between w-4/5 max-w-7xl">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            Rate <p className="inline text-red-600">me</p>
          </div>
          <div className="space-x-4">
            <button
              onClick={() => router.push("new-rating")}
              className="px-2 py-1 text-white bg-green-600 rounded-md"
            >
              Nova avaliação
            </button>
            <button
              onClick={() => router.push("new-product")}
              className="px-2 py-1 text-white bg-red-500 rounded-md"
            >
              Novo produto
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/5 h-full p-4 mt-10 bg-white rounded-md shadow-md max-w-7xl">
        {props.children}
      </div>
    </div>
  );
}
