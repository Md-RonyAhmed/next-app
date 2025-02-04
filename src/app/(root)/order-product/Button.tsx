"use client";
import { useRouter } from "next/navigation";
const Button = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handlePlaceOrder = () => {
    console.log("Placing your order");
    router.push("/");
  };
  return <button onClick={handlePlaceOrder}>{children}</button>;
};

export default Button;
