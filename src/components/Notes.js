const Notes = () => {
  return (
    <div className="px-60 py-20">
      <h1 className="text-3xl font-semibold mb-4">Notes: Namaste React</h1>
      <div className="bg-amber-200 p-4 mb-4">
        <h2 className="text-xl my-2">Episode 08</h2>
      </div>
      <div className="bg-amber-200 p-4 mb-4">
        <h2 className="text-xl my-2">Episode 09</h2>
        <p className="text-gray-600">
          Chunking, Code splitting, Dynamic bundling, lazy loading, on demand
          loading
        </p>
        <p className="text-gray-600">Lazy Loading with Suspense</p>
      </div>
    </div>
  );
};

export default Notes;
