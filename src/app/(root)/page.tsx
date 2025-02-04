import Banner from "@/components/Home/Banner";
import Feature from "@/components/Home/Feature";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <Banner />
          <Feature />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
