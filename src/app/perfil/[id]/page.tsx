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
    </div>
  );
}
