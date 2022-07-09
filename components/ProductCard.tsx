export default function ProductCard() {
  return (
    <div className="flex flex-col p-4 bg-gray-200 rounded-md">
      <div className="w-full h-40 bg-gray-400 rounded-md"></div>
      <div className="flex justify-between mt-4 font-semibold">
        <p>Ventilador Zap</p>
        <p className="text-yellow-500">4.5 ★</p>
      </div>
    </div>
  );
}
