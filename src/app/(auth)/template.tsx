"use client";
import "@/app/globals.css";
import Link from "next/link";
import { useState } from "react";

export default function AuthTemplate({ // when we need to re-render the page we should use the template
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </head>
      <body>
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
        <input
          className="outline-1 border m-8"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <main className="h-screen py-20">{children}</main>
      </body>
    </html>
  );
}
