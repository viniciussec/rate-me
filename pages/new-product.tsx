import { useState } from "react";
import Dashboard from "../layouts/Dashboard";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  async function onSubmit() {
    console.log({
      name,
      manufacturer,
      category,
      image,
      description,
    });
  }

  return (
    <Dashboard>
      <div className="flex flex-col w-full h-full">
        <p className="text-xl font-semibold">Novo produto</p>
        <form className="grid gap-4 mt-4 md:grid-cols-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Nome do produto / serviço</label>
            <input
              placeholder="Ex. Celular"
              type="text"
              className="p-2 bg-gray-200 rounded-md"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Empresa</label>
            <input
              placeholder="Ex. Samsung"
              type="text"
              className="p-2 bg-gray-200 rounded-md"
              onChange={(e) => setManufacturer(e.target.value)}
              value={manufacturer}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Categoria</label>
            <select
              className="p-2 bg-gray-200 rounded-md"
              name=""
              id=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Jogos</option>
              <option value="">Eletrônicos</option>
              <option value="">Serviços</option>
              <option value="">Automóveis</option>
            </select>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <label htmlFor="">Imagem do produto</label>
            <input
              id="image"
              name="image"
              placeholder="Produto 1"
              type="file"
              className="hidden p-2 bg-gray-200 rounded-md"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <div className="flex justify-center w-full">
              <label
                className="px-2 py-1 text-white bg-red-500 rounded-md cursor-pointer"
                htmlFor="image"
              >
                Escolher imagem
              </label>
            </div>
          </div>
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label htmlFor="">Descrição</label>
            <textarea
              value={description}
              className="p-2 bg-gray-200 rounded-md h-80"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end md:col-span-2">
            <button
              onClick={() => onSubmit()}
              className="px-2 py-1 text-white bg-red-500 rounded-md"
            >
              Registrar produto
            </button>
          </div>
        </form>
      </div>
    </Dashboard>
  );
}
