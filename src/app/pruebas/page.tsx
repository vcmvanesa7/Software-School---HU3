<<<<<<< HEAD
import ProfileCard from "../../components/profileCard/profileCard";

export default function PruebasPage() {
  return (
    <div className="p-10 min-h-screen bg-gray-900 flex flex-col items-center">
      <h1 className="text-4xl text-white font-bold mb-12 mt-6">
        Perfiles de estudiantes
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        <ProfileCard
          name="Sofía Martínez"
          role="5to Grado Avanzado"
          imageUrl="https://i.pravatar.cc/150?img=4"
          slug="sofia-martinez"
        />

        <ProfileCard
          name="Luis Hernández"
          role="4to Grado"
          imageUrl="https://i.pravatar.cc/150?img=11"
          slug="luis-hernandez"
        />

        <ProfileCard
          name="Ana Gómez"
          role="3er Grado"
          imageUrl="https://i.pravatar.cc/150?img=25"
          slug="ana-gomez"
        />
      </div>
=======
import KidCard from "@/components/card";

export default function PruebasPage() {
  const kids = [
    {
      id: 1,
      name: "Sofía Ramírez",
      grade: "2° Primaria",
      image: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
    },
    {
      id: 2,
      name: "Lucas Herrera",
      grade: "3° Primaria",
      image: "https://cdn-icons-png.flaticon.com/512/706/706839.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center gap-10 bg-[#f5e4ff] p-10">
      {kids.map((kid) => (
        <KidCard key={kid.id} {...kid} />
      ))}
>>>>>>> 61c2eee4c366e69cdd3aea17dcff94832ae4ac36
    </div>
  );
}
