import Image from "next/image";
import NavBar from "@/app/ui/home/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="relative w-full h-96">
        <Image
          src="/banner1.jpg"
          alt="Banner"
          priority
          fill
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start ml-20">
          <div className="">
            <h1 className="text-4xl text-black font-bold mb-1">
              Bem-vindo à nossa Loja Online!
            </h1>
            <p className="text-slate-800 text-start mb-4">Lorem ipsum dolor sit amet. Aliquam erat volutpat. Sed venenatis, risus eget </p>
            <button className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300">
              Ver Produtos
            </button>
          </div>
        </div>
      </div>
      {/* Restante do conteúdo da página */}
    </div>
  );
}
