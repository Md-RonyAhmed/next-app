"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.includes("dashboard") || pathname.includes("profile")) {
    return null;
  }
  return (
    <div>
      <nav className="flex justify-center gap-4 p-4 bg-blue-500 text-white">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/products">Products</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/signup">SignUp</Link>
        <Link href="/signin">SignIn</Link>
      </nav>
    </div>
  );
};

export default Navbar;
