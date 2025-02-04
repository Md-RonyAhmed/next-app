const Feature = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Feature</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-blue-600 text-xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
