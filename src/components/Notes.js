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

      <div className="bg-amber-200 p-6 mb-4">
        <h2 className="text-xl my-2">Episode 13</h2>
        <h3 className="text-lg">Setting up Testing in our app</h3>
          <ul className="list-disc text-gray-600">
            <li className="">Install React Testing Library </li>
            <li className="">Installed jest </li>
            <li className="">Installed Babel dependencies</li>
            <li className="">Configure Babel</li>
            <li className="">
              Configure Parcel Config file to disable default babel
              transpilation
            </li>
            <li className="">Jest - npx jest --init</li>
            <li className="">Install jsdom library</li>
            <li className="">
              Install @babel/preset-react - to make JSX work in test cases
            </li>
            <li className="">
              Include @babel/preset-react inside my babel config
            </li>
          <li className="">npm i -D @testing-library/jest-dom</li>
          
          <p>__tests__  this folder is used to store test files</p>
          </ul>
      </div>
    </div>
  );
};

export default Notes;
