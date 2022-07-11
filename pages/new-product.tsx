import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dashboard from "../layouts/Dashboard";
import API from "../services/api";

export default function NewProduct() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  async function uploadImage(image: File) {
    console.log(image);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/image`, {
      method: "POST",
      body: image,
      headers: {
        "Content-Type": "image/jpeg",
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          console.log(json);
          setImage(json.imageUrl);
        });
      }
    });
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    console.log({ name, manufacturer, category, image, description });

    const response = await API.post("/products", {
      name,
      manufacturer,
      category,
      description,
      imageUrl: image,
    });

    if (response.status === 201) {
      router.push("/");
    }
  }

  useEffect(() => console.log(image), [image]);

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
              <option value="games">Jogos</option>
              <option value="electronics">Eletrônicos</option>
              <option value="services">Serviços</option>
              <option value="automobiles">Automóveis</option>
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
              onChange={(e) => {
                if (!e.target.files) return;
                uploadImage(e.target.files[0]);
              }}
            />
            <div className="flex items-center justify-center w-full">
              <label
                className="px-2 py-1 text-white bg-red-500 rounded-md cursor-pointer"
                htmlFor="image"
              >
                Escolher imagem
              </label>
              {image && <img className="w-10 h-10 ml-2 rounded-full" src={image} alt="Imagem" />}
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
              onClick={(e) => onSubmit(e)}
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
