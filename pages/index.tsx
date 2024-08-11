import TodoApp from "@/components/TodoApp";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section
      className="flex justify-center items-center h-screen">
      <TodoApp />
    </section>
  );
}
