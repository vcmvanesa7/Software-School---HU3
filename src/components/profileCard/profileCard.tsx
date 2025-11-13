"use client";
import React from "react";
import Link from "next/link";

interface ProfileCardProps {
  name: string;
  role: string;
  imageUrl: string;
  slug: string;
}

export default function ProfileCard({
  name,
  role,
  imageUrl,
  slug,
}: ProfileCardProps) {
  const BLUEDARK = "#050a22";
  const BLUE = "#0b255c";
  const YELLOW = "#e6b400";
  const FOREGROUND = "#ededed";

  return (
    <div
      suppressHydrationWarning={true}
      className="relative p-0.5 rounded-2xl w-80 shadow-2xl transition-all duration-500 transform hover:scale-[1.05] group overflow-hidden"
      style={{
        backgroundColor: BLUEDARK,
        boxShadow: `0 0 50px ${BLUE}80`,
        backgroundImage: `radial-gradient(at 0% 0%, ${BLUE}30 0%, transparent 60%)`,
      }}
    >
      <div
        className="absolute inset-0.5 rounded-[15px] opacity-20 transition-opacity duration-500 group-hover:opacity-80"
        style={{
          background: `linear-gradient(45deg, ${YELLOW} 0%, ${BLUE} 50%, ${YELLOW} 100%)`,
          backgroundSize: "200% 200%",
          animation: "shine-pulse 5s infinite linear",
          filter: "blur(10px)",
        }}
      />

      <div
        className="relative z-10 p-8 rounded-[15px] w-full h-full bg-black/40 border border-white/5 backdrop-blur-md text-center"
      >
        <div className="mb-6 flex justify-center relative">
          <div
            className="w-32 h-32 p-1 rounded-full shadow-2xl transition-all duration-500"
            style={{
              background: `linear-gradient(45deg, ${YELLOW}, ${BLUE})`,
              transform: "rotateX(10deg)",
            }}
          >
            <img
              src={imageUrl}
              alt={`Foto de ${name}`}
              className="w-full h-full rounded-full object-cover border-4 border-black/50"
              style={{ filter: "saturate(1.2)" }}
            />
          </div>
        </div>

        <div className="info-container text-white">
          <h2
            className="text-3xl font-extrabold mb-0.5 tracking-tighter"
            style={{
              color: FOREGROUND,
              textShadow: `0 0 10px ${FOREGROUND}40`,
              transform: "translateY(0)",
            }}
          >
            {name}
          </h2>

          <p
            className="text-sm mb-6 font-light uppercase opacity-70 tracking-widest"
            style={{ color: YELLOW }}
          >
            {role}
          </p>

          <Link
            href={`/perfiles/${slug}`}
            className="w-full py-3 rounded-lg font-bold uppercase tracking-widest shadow-lg border border-white/10 transition-all duration-300 active:scale-[0.98] inline-block text-center"            style={{
              backgroundColor: BLUE,
              color: FOREGROUND,
              boxShadow: `0 0 30px ${BLUE}80, 0 5px 20px ${BLUEDARK}`,
            }}
          >
            Ver Perfil Completo
          </Link>
        </div>
      </div>
    </div>
  );
}
