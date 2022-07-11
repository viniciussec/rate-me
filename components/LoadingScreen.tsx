import Dashboard from "../layouts/Dashboard";

export default function LoadingScreen() {
  return (
    <Dashboard>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">
          Opa! Parece que está demorando um pouco para carregar...
        </p>
      </div>
    </Dashboard>
  );
}
