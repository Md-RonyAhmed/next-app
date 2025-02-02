"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.includes("dashboard") || pathname.includes("profile")) {
    return null;
  }

  return (
    <div className="fixed w-full top-0 z-50">
      <nav className="backdrop-blur-sm bg-white/75 shadow py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-xl text-blue-600">
                Logo
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link 
                  href="/"
                  className={`${pathname === '/' ? 'text-blue-600' : 'text-gray-600'} 
                    hover:text-blue-600 transition-colors duration-200 font-medium`}
                >
                  Home
                </Link>
                <Link 
                  href="/dashboard"
                  className={`${pathname === '/dashboard' ? 'text-blue-600' : 'text-gray-600'} 
                    hover:text-blue-600 transition-colors duration-200 font-medium`}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/about"
                  className={`${pathname === '/about' ? 'text-blue-600' : 'text-gray-600'} 
                    hover:text-blue-600 transition-colors duration-200 font-medium`}
                >
                  About
                </Link>
                <Link 
                  href="/contact"
                  className={`${pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'} 
                    hover:text-blue-600 transition-colors duration-200 font-medium`}
                >
                  Contact
                </Link>
                <Link 
                  href="/products"
                  className={`${pathname === '/products' ? 'text-blue-600' : 'text-gray-600'} 
                    hover:text-blue-600 transition-colors duration-200 font-medium`}
                >
                  Products
                </Link>
                <Link 
                  href="/docs"
                  className={`${pathname === '/docs' ? 'text-blue-600' : 'text-gray-600'} 
                    hover:text-blue-600 transition-colors duration-200 font-medium`}
                >
                  Docs
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/signin"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 
                  transition-colors duration-200 font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;