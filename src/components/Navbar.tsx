"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.includes("dashboard")) {
    return null;
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Products", href: "/products" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Docs", href: "/docs" },

    // Add more routes as needed
  ];

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
                {navLinks.map((navLink) => {
                  return (
                    <Link
                      key={navLink.name}
                      href={navLink.href}
                      className={`${
                        pathname === navLink.href
                          ? "text-blue-600"
                          : "text-gray-600"
                      } hover:text-blue-600 transition-colors duration-200 font-medium`}
                    >
                      {navLink.name}
                    </Link>
                  );
                })}
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
