import { useState } from "react";
import Dashboard from "../layouts/Dashboard";

export default function NewRating() {
  const [rating, setRating] = useState(0);
  const [product, setProduct] = useState("");
  const [comments, setComments] = useState("");

  async function onSubmit() {
    console.log({
      rating,
      product,
      comments,
    });
  }

  return (
    <Dashboard>
      <div className="flex flex-col w-full h-full">
        <p className="text-xl font-semibold">Nova avaliação</p>
        <form className="grid gap-4 mt-4 md:grid-cols-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Produto / serviço</label>
            <select
              className="p-2 bg-gray-200 rounded-md"
              onChange={(e) => setProduct(e.target.value)}
              name=""
              id=""
            >
              <option value="">Produto 1</option>
              <option value="">Produto 2</option>
              <option value="">Produto 3</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Nota</label>
            <div className="flex justify-around">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRating(1);
                }}
                className={
                  "text-3xl " +
                  (rating > 0 ? "text-yellow-400" : "text-gray-400")
                }
              >
                ★
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRating(2);
                }}
                className={
                  "text-3xl " +
                  (rating > 1 ? "text-yellow-400" : "text-gray-400")
                }
              >
                ★
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRating(3);
                }}
                className={
                  "text-3xl " +
                  (rating > 2 ? "text-yellow-400" : "text-gray-400")
                }
              >
                ★
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRating(4);
                }}
                className={
                  "text-3xl " +
                  (rating > 3 ? "text-yellow-400" : "text-gray-400")
                }
              >
                ★
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRating(5);
                }}
                className={
                  "text-3xl " +
                  (rating > 4 ? "text-yellow-400" : "text-gray-400")
                }
              >
                ★
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label htmlFor="">Comentários</label>
            <textarea
              onChange={(e) => setComments(e.target.value)}
              className="p-2 bg-gray-200 rounded-md h-80"
            />
          </div>
          <div className="flex justify-end md:col-span-2">
            <button className="px-2 py-1 text-white bg-red-500 rounded-md">
              Avaliar
            </button>
          </div>
        </form>
      </div>
    </Dashboard>
  );
}
