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
    </div>
  );
}
