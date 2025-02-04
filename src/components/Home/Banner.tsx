// import nature from "@/assets/images/iuliu-illes-uWx3_XEc-Jw-unsplash.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex">
      <div className="relative w-1/2 h-96 border-2 border-green-400 rounded-lg">
        <Image className="rounded-lg" src="https://images.unsplash.com/photo-1737403428945-c584529b7b17" alt="nature" fill objectFit="cover" />
      </div>
      <div className="w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the next generation of digital solutions. We bring your
          ideas to life with cutting-edge technology.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
