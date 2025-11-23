export default function ProductsLoader() {
  const skeletons = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
      {skeletons.map((_, i) => (
        <div
          key={i}
          className=" p-3 animate-pulse bg-gray-50"
        >
          <div className="h-40 bg-gray-300 rounded"></div>

          <div className="h-4 bg-gray-300 rounded mt-3 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>

          <div className="h-8 bg-gray-300 rounded mt-4 w-full"></div>
        </div>
      ))}
    </div>
  );
}
