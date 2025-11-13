"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface KidCardProps {
  id: number;
  name: string;
  grade: string;
  image: string;
}

export default function KidCard({ id, name, grade, image }: KidCardProps) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative w-72 bg-gradient-to-br from-[#8d88e8] via-[#b8a9f9] to-[#f3e4ff] 
                 rounded-3xl shadow-2xl p-6 text-center text-white cursor-pointer overflow-hidden"
    >
    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffccf9_0%,_transparent_40%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#aee8ff_0%,_transparent_40%)] opacity-30"></div>

     
      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-[#fff] shadow-lg mb-3 bg-white"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />

      
        <h2 className="text-2xl font-extrabold drop-shadow-md">{name}</h2>
        <p className="text-sm text-[#fff8] mb-4">🎓 {grade}</p>

       
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => router.push(`/perfil/${id}`)}
          className="bg-white text-[#8d88e8] font-bold px-5 py-2 rounded-full shadow-md hover:bg-[#f5e4ff] transition"
        >
          Ver perfil
        </motion.button>
      </div>


      <div className="absolute top-2 left-3 text-2xl">🌈</div>
      <div className="absolute bottom-3 right-4 text-2xl animate-bounce">
        ⭐
      </div>
      <div className="absolute bottom-3 left-5 text-xl animate-pulse">🦋</div>
    </motion.div>
  );
}
